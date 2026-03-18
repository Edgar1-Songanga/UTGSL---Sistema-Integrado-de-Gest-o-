import { DB } from "../services/db";

export default function Complaints(){
  return (
    <div>
      <h1 className="text-2xl mb-4">Reclamações</h1>

      {DB.complaints.map(c => (
        <div key={c.id} className="bg-white/5 p-3 mb-2 rounded">
          <strong>{c.name}</strong> ({c.bairro})<br/>
          {c.message}
        </div>
      ))}
    </div>
  );
}
