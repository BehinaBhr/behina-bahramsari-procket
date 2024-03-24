import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Goals } from "./pages/Goals/Goals";
import { Tasks } from "./pages/Tasks/Tasks";
import { Stats } from "./pages/Stats/Stats";
import { NotFound } from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="app">
       <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
