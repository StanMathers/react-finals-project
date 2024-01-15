import React, { useEffect, useState } from "react";
import { fetchFavouriteByDate } from "../../utils/storage-utils";
import { useParams } from "react-router-dom";

const Details = () => {
	const [totalReports, setTotalReports] = useState({
		date: "",
		last_update: "",
		confirmed: "",
		deaths: "",
		recovered: "",
		active: "",
	});
	const { date } = useParams();
	console.log("bbllyllylly");
	useEffect(() => {
		let parsedFavourites = fetchFavouriteByDate(date);
		if (parsedFavourites === null) {
			parsedFavourites = [];
		}
		setTotalReports(parsedFavourites);
	}, []);

	return (
		<div className="container">
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

export default Details;
