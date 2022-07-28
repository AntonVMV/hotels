import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default App;
