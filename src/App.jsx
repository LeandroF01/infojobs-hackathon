import { SkillSelection } from "./components/SkillSelection.jsx";
import { SkillTest } from "./components/SkillTest.jsx";
// import { User } from "./components/User.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SkillSelection />}></Route>
				<Route path="/test/:testName" element={<SkillTest />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
