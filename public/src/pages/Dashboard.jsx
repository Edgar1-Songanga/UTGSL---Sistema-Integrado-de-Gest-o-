export default function Dashboard(){
  return (
    <div>

      <h1 className="text-2xl font-semibold mb-6">Visão Geral</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white/5 p-6 rounded">
          <p className="text-gray-400 text-sm">Clientes</p>
          <h2 className="text-3xl font-bold">48</h2>
        </div>

        <div className="bg-white/5 p-6 rounded">
          <p className="text-gray-400 text-sm">Reclamações</p>
          <h2 className="text-3xl font-bold">12</h2>
        </div>

        <div className="bg-white/5 p-6 rounded">
          <p className="text-gray-400 text-sm">Resolvidas</p>
          <h2 className="text-3xl font-bold">30</h2>
        </div>

      </div>

    </div>
  );
}
