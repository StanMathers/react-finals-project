import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import covid from "../services/covid-services";

function App() {
	const [totalReports, setTotalReports] = useState({
		date: "",
		last_update: "",
		confirmed: "",
		deaths: "",
		recovered: "",
		active: "",
	});

	useEffect(() => {
		const date = new Date();

		const res = covid.getTotalReport("2020", "04", "01");

		res.then((data) => {
			setTotalReports({
				date: data.data.date,
				last_update: data.data.last_update,
				confirmed: data.data.confirmed,
				deaths: data.data.deaths,
				recovered: data.data.recovered,
				active: data.data.active,
			});
		});
	}, []);

	return (
		<ul>
			<li>Date: {totalReports.date}</li>
			<li>Last Update: {totalReports.last_update}</li>
			<li>Confirmed Cases: {totalReports.confirmed}</li>
			<li>Deaths: {totalReports.deaths}</li>
			<li>Recovered: {totalReports.recovered}</li>
			<li>Active Cases: {totalReports.active}</li>
		</ul>
	);
}

export default App;
