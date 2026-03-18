export default function Sidebar({ setPage }) {
  return (
    <div className="w-60 bg-black/80 border-r border-white/10 p-4">
      <h2 className="text-xl font-semibold mb-6">UTGSL</h2>

      <nav className="space-y-2">
        <button onClick={()=>setPage("dashboard")} className="block w-full text-left hover:text-green-400">Dashboard</button>
        <button onClick={()=>setPage("clients")} className="block w-full text-left hover:text-green-400">Clientes</button>
        <button onClick={()=>setPage("complaints")} className="block w-full text-left hover:text-green-400">Reclamações</button>
      </nav>
    </div>
  );
}
