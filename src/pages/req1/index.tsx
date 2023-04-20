import { useState, useEffect } from 'react';
import { IReq1 } from '@/models/req1';

const Req1ListPage = () => {
  const [req1s, setReq1s] = useState<IReq1[]>([]);
  const [filterInitialYear, setFilterInitialYear] = useState<number | undefined>(2017);
  const [filterInitialMonth, setFilterInitialMonth] = useState<number | undefined>(1);
  const [filterFinalYear, setFilterFinalYear] = useState<number | undefined>(2017);
  const [filterFinalMonth, setFilterFinalMonth] = useState<number | undefined>(1);

  useEffect(() => {
    const fetchReq1s = async () => {
      const response = await fetch('/api/req_1');
      const data = await response.json();

      setReq1s(data);
    };
    fetchReq1s();
  }, [filterInitialYear, filterInitialMonth, filterFinalYear, filterFinalMonth]);

  const handleFilterInitialYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value);
    setFilterInitialYear(selectedYear);
  };

  const handleFilterInitialMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = parseInt(event.target.value);
    setFilterInitialMonth(selectedMonth);
  };

  const handleFilterFinalYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value);
    setFilterFinalYear(selectedYear);
  };

  const handleFilterFinalMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = parseInt(event.target.value);
    setFilterFinalMonth(selectedMonth);
  };

  const yearOptions = [];
  for (let year = 2020; year >= 2017; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const monthOptions = [];
  for (let month = 1; month <= 12; month++) {
    monthOptions.push(
      <option key={month} value={month}>
        {month}
      </option>
    );
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Req1 List</h1>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="initialYear">
            Initial Year
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="initialYear"
              onChange={handleFilterInitialYearChange}
              value={filterInitialYear}
            >
              {yearOptions}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3v8l-3 3-3-3V7z" />
                <path d="M0 0h20v20H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mr-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="initialMonth">
            Initial month
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="initialMonth"
              onChange={handleFilterInitialMonthChange}
              value={filterInitialMonth}
            >
              {monthOptions}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3v8l-3 3-3-3V7z" />
                <path d="M0 0h20v20H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mr-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="finalYear">
            Final year
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="finalYear"
              onChange={handleFilterFinalYearChange}
              value={filterFinalYear}
            >
              {yearOptions}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3v8l-3 3-3-3V7z" />
                <path d="M0 0h20v20H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mr-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="finalMonth">
            Final month
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="finalMonth"
              onChange={handleFilterFinalMonthChange}
              value={filterFinalMonth}
            >
              {monthOptions}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3v8l-3 3-3-3V7z" />
                <path d="M0 0h20v20H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">STATE</th>
            <th className="px-4 py-2">COUNT</th>
          </tr>
        </thead>
        <tbody>
          {req1s.map((req1) => (
            <tr key={req1._id}>
              <td className="border px-4 py-2">{req1.STATE}</td>
              <td className="border px-4 py-2">{req1.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Req1ListPage;
