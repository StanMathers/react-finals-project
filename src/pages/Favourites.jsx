import { useNavigate } from "react-router-dom";
import {
	loadParsedFavourites,
	dateExistsInFavourites,
} from "../../utils/storage-utils";

import Card from "../components/Favourites/Card";
import "../styles/Favourites/styles.css";

const Favourites = () => {
	const parsedFavourites = loadParsedFavourites();
	const navigate = useNavigate();

	if (parsedFavourites === null) {
		return <h1 className="h1 text-center text-danger">No favourites found</h1>;
	}
	const handleOnClick = (date) => {
		navigate(`/saved/${date}`);
	};

	return (
		<div className="container">
			<div className="row">
				{parsedFavourites.map((fav) => {
					return (
						<div className="col-12 col-item" key={fav.date}>
							<Card
								date={fav.date}
								lastUpdated={fav.last_update}
								onClick={handleOnClick}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Favourites;
