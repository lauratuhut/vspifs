import "./App.css";
import SearchScreen from "./SearchScreen";
import ResultScreen from "./ResultScreen";
import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import supabase from "./supabase";
import { useHash } from "react-use";

function App() {
  const [screen, setScreen] = useState("Search");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hash, setHash] = useHash();

  useEffect(() => {
    setErrorMessage("");
    if (!search) return;
    const gf = new GiphyFetch("8t0kIhJUCqvrto0beem5S5d3UbxZQsed");

    async function fetchData() {
      setLoading(true);
      const { data: gifs } = await gf.search(search, {
        sort: "relevant",
        limit: 20,
      });
      setResults(gifs);
      setLoading(false);
      if (gifs.length === 0) {
        setErrorMessage(
          `Imi pare rau, nu am gasit rezultate pentru "${search}"`
        );
      } else {
        let recentSearches =
          JSON.parse(localStorage.getItem("recentSearches")) || [];
        const maxSearches = 10;
        if (!recentSearches.includes(search)) {
          recentSearches.unshift(search);
          if (recentSearches.length > maxSearches) {
            recentSearches = recentSearches.slice(0, maxSearches);
          }
          localStorage.setItem(
            "recentSearches",
            JSON.stringify(recentSearches)
          );
        }
        const { data: keyword } = await supabase
          .from("searches")
          .select("id, count")
          .ilike("keyword", search)
          .single();
        if (keyword) {
          await supabase
            .from("searches")
            .update({ count: keyword.count + 1 })
            .eq("id", keyword.id);
        } else {
          await supabase
            .from("searches")
            .insert([{ keyword: search, count: 1 }]);
        }
        setScreen("Result");
      }
    }
    fetchData();
  }, [search]);

  useEffect(() => {
    setHash(screen);
  }, [screen]);

  useEffect(() => {
    setScreen(hash.substring(1));
  }, [hash]);

  const onChangeScreen = (screen) => {
    setScreen(screen);
    setLoading(loading);
  };

  const onSearch = (search) => {
    setSearch(search);
  };

  const screens = {
    Search: SearchScreen,
    Result: ResultScreen,
  };

  const Screen = screens[screen] || SearchScreen;
  return (
    <>
      <Screen
        search={search}
        results={results}
        onChangeScreen={onChangeScreen}
        onSearch={onSearch}
        loading={loading}
      />
      {errorMessage && (
        <p className="text-center text-red-800 pb-8">
          Sorry, no results found for
          <span className="italic"> {search}</span>
        </p>
      )}
    </>
  );
}

export default App;
