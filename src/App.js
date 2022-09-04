import "./App.css";
import HomeScreen from "./HomeScreen";
import ResultScreen from "./ResultScreen";
import React, { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

function App() {
  const [screen, setScreen] = useState("Home");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
    if (!search) return;
    const gf = new GiphyFetch("8t0kIhJUCqvrto0beem5S5d3UbxZQsed");

    async function fetchData() {
      setLoading(true);
      const { data: gifs } = await gf.search(search, {
        sort: "relevant",
        limit: 10,
      });
      // console.log(gifs);
      setResults(gifs);
      setLoading(false);
      if (gifs.length === 0) {
        setErrorMessage(
          `Imi pare rau, nu am gasit rezultate pentru "${search}"`
        );
      } else {
        setScreen("Result");
      }
    }
    fetchData();
  }, [search]);

  const onChangeScreen = (screen) => {
    setScreen(screen);
    setLoading(loading);
  };

  const onSearch = (search) => {
    setSearch(search);
  };

  const screens = {
    Home: HomeScreen,
    Result: ResultScreen,
  };

  const Screen = screens[screen] || HomeScreen;
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
        <p className="text-center text-red-800">
          Imi pare rau, nu am gasit rezultate pentru
          <span className="italic"> {search}</span>
        </p>
      )}
    </>
  );
}

export default App;
