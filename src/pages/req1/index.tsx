import { useState, useEffect } from 'react';
import { IReq1 } from '@/models/req1';

const Req1ListPage = () => {
  const [req1s, setReq1s] = useState<IReq1[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchReq1s = async () => {
      const response = await fetch('/api/req_1');
      const data = await response.json();
      const sortedData = data.sort((a, b) => {
        if (a.STATE > b.STATE) {
          return 1;
        } else if (a.STATE < b.STATE) {
          return -1;
        } else {
          if (a.year > b.year) {
            return 1;
          } else if (a.year < b.year) {
            return -1;
          } else {
            if (a.month > b.month) {
              return 1;
            } else if (a.month < b.month) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      });
      setReq1s(sortedData);
    };
    fetchReq1s();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredReq1s = req1s.filter((req1) =>
    req1.STATE.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Req1 List</h1>
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
            <th className="px-4 py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredReq1s.map((req1) => (
            <tr key={req1._id}>
              <td className="border px-4 py-2">{req1.STATE}</td>
              <td className="border px-4 py-2">{req1.year}</td>
              <td className="border px-4 py-2">{req1.month}</td>
              <td className="border px-4 py-2">{req1.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Req1ListPage;
