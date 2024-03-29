import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import "../../styles/Favourites/styles.css"

const Card = ({ date, comment, lastUpdated, onClick, onCommentAdd }) => {
	const [modalIsShown, setModalIsShown] = useState(false);
	const handleOnModalClose = () => {
		setModalIsShown(false);
	};
	return (
		<>
			<motion.div
				whileHover={{ scale: [null, 1.1, 1.1] }}
				transition={{ duration: 0.3 }}
			>
				<div className="card">
					<div className="card-body">
						<div className="d-flex align-items-center justify-content-between col-item">
							<div onClick={() => onClick(date)}>
								<div className="card-title">{date}</div>
								<p>Last updated at: {lastUpdated}</p>
								<small>{comment}</small>
							</div>
							<a onClick={() => setModalIsShown(true)}>
								<i className="bi bi-pencil h3 cursor"></i>
							</a>
						</div>
					</div>
				</div>
			</motion.div>
			{modalIsShown && (
				<Modal
					date={date}
					onModalClose={handleOnModalClose}
					onCommentAdd={onCommentAdd}
				/>
			)}
		</>
	);
};

export default Card;
