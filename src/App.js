import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Expenses from './components/expenses/Expenses';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="expenses" element={<Expenses />} />
        {/* <Route path="/planning" element={<Planning />} /> */}
        {/* <Route path="/userinfo/:username" element={<UserInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
