import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Goals } from "./pages/Goals/Goals";
import { Tasks } from "./pages/Tasks/Tasks";
import { Stats } from "./pages/Stats/Stats";
import { NotFound } from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GoalDetails } from "./pages/GoalDetails/GoalDetails";
import { TaskDetails } from "./pages/TaskDetails/TaskDetails";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/goals/:goalId" element={<GoalDetails />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:taskId" element={<TaskDetails />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
