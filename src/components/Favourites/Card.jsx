import React from "react";

const Card = ({date, lastUpdated, onClick}) => {
	return (
		<div className="card" onClick={() => onClick(date)}>
			<div className="card-body">
				<div className="card-title">{date}</div>
				<p>Last updated at: {lastUpdated}</p>
			</div>
		</div>
	);
};

export default Card;
