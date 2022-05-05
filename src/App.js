import { Route, Routes } from "react-router-dom";

import "./App.css";
import Characterlist from "./pages/Characterlist";
import Character from "./pages/Character";
import Search from "./pages/Search";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route exact path="/" element={<Characterlist />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
