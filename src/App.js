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
import { EditGoal } from "./pages/EditGoal/EditGoal";
import { EditTask } from "./pages/EditTask/EditTask";
import { NewGoal } from "./pages/NewGoal/NewGoal";
import { NewTask } from "./pages/NewTask/NewTask";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/goals/new" element={<NewGoal />} />
            <Route path="/goals/:goalId" element={<GoalDetails />} />
            <Route path="/goals/:goalId/edit" element={<EditGoal />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/new" element={<NewTask />} />
            <Route path="/tasks/:taskId" element={<TaskDetails />} />
            <Route path="/tasks/:taskId/edit" element={<EditTask />} />
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
