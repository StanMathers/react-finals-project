import React, { useEffect } from "react";
import { useState } from "react";

import covid from "../../services/covid-services";
import dateServices from "../../services/date-services";

const Home = () => {
	const [totalReports, setTotalReports] = useState({
		date: "",
		last_update: "",
		confirmed: "",
		deaths: "",
		recovered: "",
		active: "",
	});
	const [selectedDate, setSelectedDate] = useState({
		year: 2020,
		month: 4,
		day: 2,
	});

	const [icon, setIcon] = useState("bi bi-heart h4");

	useEffect(() => {
		const formattedDate = dateServices.getFormattedForApiAsObject(
			selectedDate.year,
			selectedDate.month,
			selectedDate.day
		);

		const res = covid.getTotalReport(
			formattedDate.year,
			formattedDate.month,
			formattedDate.day
		);

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
	}, [selectedDate]);

	useEffect(() => {
		if (dateExistsInFavourites(totalReports.date)) {
			setIcon("bi bi-heart-fill h4");
		} else {
			setIcon("bi bi-heart h4");
		}
	});

	// Local storage management start
	const loadParsedFavourites = () => {
		return JSON.parse(localStorage.getItem("favourites"));
	};

	const dateExistsInFavourites = (date) => {
		let favourites = loadParsedFavourites();
		for (let i = 0; i < favourites.length; i++) {
			if (favourites[i].date === date) {
				return true;
			}
		}
		return false;
	};

	const handleOnFavouriteSelect = () => {
		console.log("Clicked");
		if (localStorage.getItem("favourite") === undefined) {
			localStorage.setItem("favourites", JSON.stringify([totalReports]));
			setIcon("bi bi-heart-fill h4");
		} else {
			let favourites = loadParsedFavourites();
			if (!dateExistsInFavourites(totalReports.date)) {
				favourites.push(totalReports);
				setIcon("bi bi-heart-fill h4");
			} else {
				console.log("Had to remove");
				favourites = favourites.filter(
					(favourite) => favourite.date !== totalReports.date
				);
				setIcon("bi bi-heart h4");
			}
			localStorage.setItem("favourites", JSON.stringify(favourites));
		}
	};
	// Local storage management end

	return (
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-10">
					<input
						onChange={(e) => {
							let date = e.target.value.split("-");
							console.log(date);
							setSelectedDate({
								year: parseInt(date[0]),
								month: parseInt(date[1]),
								day: parseInt(date[2]),
							});
						}}
						className="form-control"
						type="date"
						name="date"
						id="date"
						value={dateServices.getFormattedForInput(
							selectedDate.year,
							selectedDate.month,
							selectedDate.day
						)}
					/>
				</div>
				<div className="col-2 align-self-center">
					<a onClick={handleOnFavouriteSelect}>
						<i className={icon}></i>
					</a>
				</div>
			</div>

			<div className="row align-items-center justify-content-center text-center">
				<div className="col-12">
					<p className="text-danger h2">Confirmed: {totalReports.confirmed}</p>
				</div>
				<div className="col-12">
					<p className="text-danger h2">Deaths: {totalReports.deaths}</p>
				</div>
				<div className="col-12">
					<p className="text-success h2">Recovered: {totalReports.recovered}</p>
				</div>
				<div className="col-12">
					<p className="text-danger h2">Recovered: {totalReports.active}</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
