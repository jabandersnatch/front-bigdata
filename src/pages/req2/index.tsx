import { useState, useEffect } from 'react';
import { IReq2 } from '@/models/req2';

const Req2ListPage = () => {
  const [req2s, setReq2s] = useState<IReq2[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchreq2s = async () => {
      const response = await fetch('/api/req_2');
      const data = await response.json();
    
      setReq2s(data);
    };
    fetchreq2s();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredreq2s = req2s.filter((req2) =>
    req2.STATE.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">¿Cuál es el tipo de carga más común por estado, en un periodo dado?</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Filter by date:</label>
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
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Month</th>
          </tr>
        </thead>
        <tbody>
          {filteredreq2s.map((req2) => (
            <tr key={req2._id}>
              <td className="border px-4 py-2">{req2.STATE}</td>
              <td className="border px-4 py-2">{req2.month_year}</td>
              <td className="border px-4 py-2">{req2.Cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Req2ListPage;
