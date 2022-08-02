import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { Details } from "./pages/Details/Details";
import { Reserve } from "./pages/Reserve/Reserve";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="details" element={<Navigate to="/" replace />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="reserve" element={<Reserve />} />
      </Route>
    </Routes>
  );
};

export default App;
