
import MainPart from "./MainPart";

export default function Home() {
  return <main className="bg-gradient-to-b from-slate-950 to-slate-900 h-screen mb-[5px]">
    <header className="text-slate-200 backdrop-blur-sm">
      <div className="container flex justify-between items-center py-5">
        <h1>logo</h1>
        <nav className="flex justify-between items-center w-1/4">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </nav>
      </div>
    </header>
    <MainPart/>
  </main>
}
