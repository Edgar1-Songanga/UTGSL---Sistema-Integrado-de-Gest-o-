export default function Topbar(){
  return (
    <div className="p-4 border-b border-white/10 flex justify-between">
      <div>
        <h1 className="text-lg font-semibold">Painel Operacional</h1>
        <p className="text-xs text-gray-400">Gestão de Saneamento</p>
      </div>

      <div className="text-green-400">● Online</div>
    </div>
  );
}
