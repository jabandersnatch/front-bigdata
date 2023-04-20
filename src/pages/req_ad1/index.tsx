import { useState, useEffect } from 'react';
import { IReqAd1 } from '@/models/req_ad1';

const req_ad1ListPage = () => {
  const [req_ad1s, setreq_ad1s] = useState<IReqAd1[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchreq_ad1s = async () => {
      const response = await fetch('/api/req_ad1');
      const data = await response.json();
    
      setreq_ad1s(data);
    };
    fetchreq_ad1s();
  }, []);

  
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredreq_ad1s = req_ad1s.filter((req_ad1) =>
    req_ad1.STATE.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">req_ad1 List</h1>
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
            <th className="px-4 py-2">POPESTIMATE2017</th>
            <th className="px-4 py-2">NETMIG2017</th>
            <th className="px-4 py-2">count</th>
          </tr>
        </thead>
        <tbody>
          {filteredreq_ad1s.map((req_ad1) => (
            <tr key={req_ad1._id}>
              <td className="border px-4 py-2">{req_ad1.STATE}</td>
              <td className="border px-4 py-2">{req_ad1.YEAR}</td>
              <td className="border px-4 py-2">{req_ad1.POPESTIMATE2017}</td>
              <td className="border px-4 py-2">{req_ad1.NETMIG2017}</td>
              <td className="border px-4 py-2">{req_ad1.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default req_ad1ListPage;
