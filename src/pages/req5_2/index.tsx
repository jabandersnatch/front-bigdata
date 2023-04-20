import { useState, useEffect } from 'react';
import { IReq5_2 } from '@/models/req5_2';

const req5_2ListPage = () => {
  const [req5_2s, setreq5_2s] = useState<IReq5_2[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchreq5_2s = async () => {
      const response = await fetch('/api/req5_2');
      const data = await response.json();
    
      setreq5_2s(data);
    };
    fetchreq5_2s();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredreq5_2s = req5_2s.filter((req5_2) =>
    req5_2.STATE.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">¿La relación cambia por año?</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Filter by STATE:</label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">STATE</th>
            <th className="px-4 py-2">Año</th>
            <th className="px-4 py-2">DiaSemana</th>
            <th className="px-4 py-2">Cargo</th>
            <th className="px-4 py-2">NumEmbarcaciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredreq5_2s.map((req5_2) => (
            <tr key={req5_2._id}>
              <td className="border px-4 py-2">{req5_2.STATE}</td>
              <td className="border px-4 py-2">{req5_2.Año}</td>
              <td className="border px-4 py-2">{req5_2.DiaSemana}</td>
              <td className="border px-4 py-2">{req5_2.Cargo}</td>
              <td className="border px-4 py-2">{req5_2.NumEmbarcaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default req5_2ListPage;
