import Editor from "@/components/Editor";


export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 to-purple-400 p-8 text-zinc-50">
      <div className="mx-auto grid min-h-[720px] w-[1100px] grid-cols-[16rem_1fr] overflow-hidden rounded-xl border border-black/20 bg-zinc-800 shadow-sm">
        <aside className="border-r bg-zinc-900 border-r-zinc-700 p-4">
          <div className="group flex w-14 gap-2">
            <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
            <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
            <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
