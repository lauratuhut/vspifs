import { useEffect, useState } from "react";
import SearchList from "./SearchList";

function RecentSearches(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];    
    setData(recentSearches);
  }, []);

  if (data.length === 0) return null;

  return (
   <SearchList title={`Your ${data.length} recent searches`} data={data} onSearch={props.onSearch} />
  );
}

export default RecentSearches;
