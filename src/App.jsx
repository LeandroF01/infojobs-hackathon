import { SkillSelection } from "./components/SkillSelection.jsx";
import { SkillTest } from "./components/SkillTest.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Cv } from "./components/Cv.jsx";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import skill from "./json/skills.json";
import "./App.css";

function App() {
	const [selectedSkill, setSelectedSkill] = useState([]);

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
			<Navbar />
			<Routes>
				<Route path="/" element={<SkillSelection skills={selectedSkill} />} />
				<Route
					path="/test/:testName"
					element={<SkillTest skills={selectedSkill} />}
				/>
				<Route path="/cv" element={<Cv skills={selectedSkill} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
