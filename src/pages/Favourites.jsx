import { useNavigate } from "react-router-dom";
import { loadParsedFavourites, addComment } from "../../utils/storage-utils";

import Card from "../components/Favourites/Card";
import "../styles/Favourites/styles.css";
import { useEffect, useState } from "react";

const Favourites = () => {
	const navigate = useNavigate();
	const [parsedFavourites, setParsedFavourites] = useState(
		loadParsedFavourites()
	);

	if (parsedFavourites === null) {
		return <h1 className="h1 text-center text-danger">No favourites found</h1>;
	}
	const handleOnClick = (date) => {
		navigate(`/saved/${date}`);
	};
	const handleOnCommentAdd = (date, comment) => {
		addComment(date, comment);
		setParsedFavourites(loadParsedFavourites());
	};

	return (
		<div className="container">
			<div className="row gy-2">
				{parsedFavourites.map((fav) => {
					return (
						<div className="col-12 col-item" key={fav.date}>
							<Card
								date={fav.date}
								comment={fav.comment}
								lastUpdated={fav.last_update}
								onClick={handleOnClick}
								onCommentAdd={handleOnCommentAdd}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Favourites;
