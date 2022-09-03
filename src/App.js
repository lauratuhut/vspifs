import "./App.css";
import HomeScreen from "./HomeScreen";
import ResultScreen from "./ResultScreen";
import React, { useState } from 'react';

function App() {
  const [screen, setScreen] = useState("Home");
  const [search, setSearch] = useState("");

  const onChangeScreen = (screen) => {
    setScreen(screen);
  }
  
  const onSearch = (search) => {
    setSearch(search);
    setScreen("Result");
  }

  const screens = {
    Home: HomeScreen,
    Result: ResultScreen
  }
  const Screen = screens[screen] || HomeScreen;
  return <Screen search={search} onChangeScreen={onChangeScreen} onSearch={onSearch} />;
}

export default App;
