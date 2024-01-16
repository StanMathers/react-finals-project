import React, { useState, useEffect } from "react";
// Get current endpoint from react-router-dom
import "../../styles/Navbar/styles.css";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const spring = {
	type: "spring",
	stiffness: 700,
	damping: 30,
};

const Navbar = ({ theme, onThemeChange }) => {
	// Get current endpoint from react-router-dom
	const location = useLocation();
	const path = location.pathname;
	const [themeIcon, setThemeIcon] = useState("bi bi-moon");

	useEffect(() => {
		if (theme === "light") {
			setThemeIcon("bi bi-moon");
		} else {
			setThemeIcon("bi bi-sun");
		}
	});

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Covid Stats
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className={"nav-link" + (path === "/" ? " active" : "")}
								aria-current="page"
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={"nav-link" + (path === "/saved" ? " active" : "")}
								aria-current="page"
								to="/saved"
							>
								Saved
							</Link>
						</li>
					</ul>
					<div className="d-flex align-items-center gap-2">
						<div
							className="switch form-control"
							data-ison={theme === "dark"}
							onClick={onThemeChange}
						>
							<motion.div className="handle" layout transition={spring} />
						</div>
						<a>
							<i className={themeIcon + " h5"}></i>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
