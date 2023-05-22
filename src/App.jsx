import { SkillSelection } from "./components/SkillSelection.jsx";
import { SkillTest } from "./components/SkillTest.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import skill from "./json/skills.json";
import { useParams } from "react-router-dom";
import "./App.css";

function App() {
	const [selectedSkill, setSelectedSkill] = useState([]);
	const { testName } = useParams();

	useEffect(() => {
		const storedSkills = localStorage.getItem("skills");
		if (storedSkills) {
			setSelectedSkill(JSON.parse(storedSkills));
		} else {
			setSelectedSkill(skill);
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<SkillSelection skills={selectedSkill} />}></Route>
				<Route
					path="/test/:testName"
					element={<SkillTest skills={selectedSkill} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
