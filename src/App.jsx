import { SkillSelection } from "./components/SkillSelection.jsx";
import { SkillTest } from "./components/SkillTest.jsx";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";

function App() {
	const [testData, setTestData] = useState();
	const { testName } = useParams();
	console.log(testName, testData);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SkillSelection />}></Route>
				<Route
					path="/test/:testName"
					element={<SkillTest setTestData={setTestData} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
