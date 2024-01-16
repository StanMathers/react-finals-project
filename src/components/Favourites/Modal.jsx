import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	comment: yup.string().required("Comment is required"),
});

const Modal = ({ date, onModalClose, onCommentAdd }) => {
	const modalStyle = {
		display: "block",
		backgroundColor: "rgba(0, 0, 0, 0.8)",
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		onCommentAdd(date, data.comment);
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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="modal-body">
							{/* Text area */}
							<div className="mb-3">
								<label htmlFor="confirmed" className="form-label">
									Comment
								</label>
								<input
									type="text"
									name="comment"
									placeholder="Comment"
									className="form-control"
									id="comment"
									{...register("comment")}
								/>
								<p className="text-danger">{errors.comment?.message}</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="submit" className="btn btn-primary">
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
