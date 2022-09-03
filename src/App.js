import "./App.css";
import HomeScreen from "./HomeScreen";
import ResultScreen from "./ResultScreen";
import React, { useState } from 'react';

function App() {
  const [screen, setScreen] = useState("Home");

  const onChangeScreen = (screen) => {
    setScreen(screen);
  }
  
  const screens = {
    Home: HomeScreen,
    Result: ResultScreen
  }
  const Screen = screens[screen] || HomeScreen;
  return <Screen onChangeScreen={onChangeScreen} />;
}

export default App;
