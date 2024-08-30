import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import BasicCalculator from './Components/BasicCalculator';
import BGChanger from './Components/BGChanger';
import CaseConertor from './Components/CaseConertor';
import SimpleInterestCalculator from './Components/SimpleInterestCalculator';
import PasswordGenerator from './Components/PasswordGenerator';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/basic-calculator/" element={<BasicCalculator />} />
        <Route path="/si-calculator/" element={<SimpleInterestCalculator/>} />
        <Route path="/bg-changer/" element={<BGChanger />} />
        <Route path="/case-convertor/" element={<CaseConertor />} />
        <Route path="/password-generator/" element={<PasswordGenerator />} />
        
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
