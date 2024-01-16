import React from "react";
import { useRef } from "react";
import { addComment } from "../../../utils/storage-utils";

const Modal = ({ date, onModalClose, onCommentAdd }) => {
	const modalStyle = {
		display: "block",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
	};
	const commentRef = useRef();
	const handleOnSave = (e) => {
		e.preventDefault();
		const comment = commentRef.current.value;
		onCommentAdd(date, comment);
		onModalClose();
	};
	return (
		<div className="modal show fade" tabIndex="-1" style={modalStyle}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Editing {date}</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={onModalClose}
						></button>
					</div>
					<div className="modal-body">
						{/* Text area */}
						<div className="mb-3">
							<label htmlFor="confirmed" className="form-label">
								Comment
							</label>
							<input
								ref={commentRef}
								type="text"
								className="form-control"
								id="confirmed"
							/>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleOnSave}
						>
							Save changes
						</button>
						<button
							type="button"
							className="btn btn-danger"
							onClick={onModalClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
