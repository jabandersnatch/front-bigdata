import { useState, useEffect } from 'react';
import { IReq3 } from '@/models/req3';

const req3ListPage = () => {
  const [req3s, setreq3s] = useState<IReq3[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchreq3s = async () => {
      const response = await fetch('/api/req_3');
      const data = await response.json();
    
      setreq3s(data);
    };
    fetchreq3s();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredreq3s = req3s.filter((req3) =>
    req3.STATE.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">¿Qué tanto afectó la pandemia al tráfico de embarcaciones teniendo en cuenta el número de embarcaciones por mes en cada estado en años anteriores?</h1>
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
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Month</th>
          </tr>
        </thead>
        <tbody>
          {filteredreq3s.map((req3) => (
            <tr key={req3._id}>
              <td className="border px-4 py-2">{req3.STATE}</td>
              <td className="border px-4 py-2">{req3.month_year}</td>
              <td className="border px-4 py-2">{req3.Cargo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default req3ListPage;
