import {Route, Routes} from "react-router";
import 조종사 from "./components/Lists/조종사";
import Home from "./components/Home";
import 농업인 from "./components/Lists/농업인";
import 대리점 from "./components/Lists/대리점";
import Task_Group from "./components/Lists/Task_Group";
import Task from "./components/Lists/Task";
import Task_Detail from "./components/Lists/Task_Detail";
import Team from "./components/Lists/Team";
import 목록 from "./components/Lists/목록";
import 통계 from "./components/Charts/통계";
import 조종사신규가입 from "./components/Charts/조종사신규가입";
import 조종사누적가입 from "./components/Charts/조종사누적가입";
import 조종사접속자 from "./components/Charts/조종사접속자";
import 농업인신규가입 from "./components/Charts/농업인신규가입";
import 농업인누적가입 from "./components/Charts/농업인누적가입";
import 농업인접속자 from "./components/Charts/농업인접속자";
import 농업인발주작업 from "./components/Charts/농업인발주작업";
import TG from "./components/Charts/TG";
import T from "./components/Charts/T.js";
import TD from "./components/Charts/TD";
import Team통계 from "./components/Charts/Team통계.js";
import 누적결제 from "./components/Charts/누적결제";
import ResponsiveAppBar from './components/Nav';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="조종사" element={<조종사 />} />
        <Route path="농업인" element={<농업인 />} />
        <Route path="대리점" element={<대리점 />} />
        <Route path="Task_Group" element={<Task_Group />} />
        <Route path="Task" element={<Task />} />
        <Route path="Task_Detail" element={<Task_Detail />} />
        <Route path="Team" element={<Team />} />
        <Route path="목록" element={<목록 />} />
        <Route path="통계" element={<통계 />} />
        <Route path="조종사신규가입" element={<조종사신규가입 />} />
        <Route path="조종사누적가입" element={<조종사누적가입 />} />
        <Route path="조종사접속자" element={<조종사접속자 />} />
        <Route path="농업인신규가입" element={<농업인신규가입 />} />
        <Route path="농업인누적가입" element={<농업인누적가입 />} />
        <Route path="농업인접속자" element={<농업인접속자 />} />
        <Route path="농업인발주작업" element={<농업인발주작업 />} />
        <Route path="TG" element={<TG />} />
        <Route path="T" element={<T />} />
        <Route path="TD" element={<TD />} />
        <Route path="Team통계" element={<Team통계 />} />
        <Route path="누적결제" element={<누적결제 />} />
      </Routes>
    </div>
  );
  
}

export default App;






