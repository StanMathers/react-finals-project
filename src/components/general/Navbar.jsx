import React, { useState, useEffect } from "react";
import useTheme from "../../hooks/useTheme";
// Get current endpoint from react-router-dom
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
	// Get current endpoint from react-router-dom
	const location = useLocation();
	const path = location.pathname;
	const [themeIcon, setThemeIcon] = useState("bi bi-moon");
	const { theme, toggleTheme } = useTheme();

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
				<a className="navbar-brand" href="#">
					Covid Stats
				</a>
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
						<li className="nav-item">
							<div class="form-check form-switch">
								<input
									className="form-check-input"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckDefault"
									onChange={toggleTheme}
									checked={theme === "dark"}
								/>

								<label
									className="form-check-label"
									for="flexSwitchCheckDefault"
								>
									<i className={themeIcon}></i>
								</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
