import { useEffect, useState } from "react";

function RecentSearches(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];    
    setData(recentSearches);
  }, []);

  if (data.length === 0) return null;

  return (
    <ul className="text-center">
      <h1>Your {data.length} recent searches</h1>
      {data.map((item, index) => {
        return (
          <li key={index}>
            <button className="text-blue-600 cursor-pointer" onClick={() => props.onSearch(item)}>{item}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default RecentSearches;
