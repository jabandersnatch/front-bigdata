import { useState, useEffect } from 'react';
import { IReq5_1 } from '@/models/req5_1';

const Req5_1ListPage = () => {
  const [req5_1s, setReq5_1s] = useState<IReq5_1[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchreq5_1s = async () => {
      const response = await fetch('/api/req5_1');
      const data = await response.json();
    
      setReq5_1s(data);
    };
    fetchreq5_1s();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredreq5_1s = req5_1s.filter((req5_1) =>
    req5_1.STATE.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">¿Existe alguna relación entre el día de la semana y el tipo de carga en cada estado?</h1>
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
            <th className="px-4 py-2">DiaSemana</th>
            <th className="px-4 py-2">Cargo</th>
            <th className="px-4 py-2">NumEmbarcaciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredreq5_1s.map((req5_1) => (
            <tr key={req5_1._id}>
              <td className="border px-4 py-2">{req5_1.STATE}</td>
              <td className="border px-4 py-2">{req5_1.DiaSemana}</td>
              <td className="border px-4 py-2">{req5_1.Cargo}</td>
              <td className="border px-4 py-2">{req5_1.NumEmbarcaciones}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Req5_1ListPage;
