"use client";

import { initialContent } from "@/components/initialContent";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/tokyo-night-dark.css";
import { lowlight } from "lowlight/lib/core";
import {
  RxChatBubble,
  RxChevronDown,
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
} from "react-icons/rx";
import { BubbleButton } from "./BubbleButton";

lowlight.registerLanguage("html", html);

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className="prose prose-invert mx-auto max-w-[700px] pt-16"
      />
      {editor && (
        <BubbleMenu
          className="flex divide-x divide-zinc-600 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-700 shadow-xl shadow-black/20 hover:text-zinc-50"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="h-4 w-4" />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble className="h-4 w-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive("bold")}
            >
              <RxFontBold className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive("italic")}
            >
              <RxFontItalic className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive("strike")}
            >
              <RxStrikethrough className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive("code")}
            >
              <RxCode className="h-4 w-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
