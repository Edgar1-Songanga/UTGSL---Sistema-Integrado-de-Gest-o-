import { DB } from "../services/db";

export default function Clients(){
  return (
    <div>
      <h1 className="text-2xl mb-4">Clientes</h1>

      {DB.clients.length === 0 ? (
        <p>Sem clientes</p>
      ) : (
        DB.clients.map(c => (
          <div key={c.id} className="bg-white/5 p-3 mb-2 rounded">
            {c.name} - {c.bairro}
          </div>
        ))
      )}
    </div>
  );
}
