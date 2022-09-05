import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import supabase from "./supabase";

function TopSearches(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase
        .from("searches")
        .select("keyword, count")
        .order("count", { ascending: false })
        .limit(10);
      setData(data.map(item => `${item.keyword}`));
    }
    fetchData();
  }, []);

  if (data.length === 0) return null;

  return (
    <SearchList
      title={`Top ${data.length} searches`}
      data={data}
      onSearch={props.onSearch}
    />
  );
}

export default TopSearches;
