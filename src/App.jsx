import { useEffect } from "react";

// Third party libraries
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/general/Navbar";
import Favourites from "./pages/Favourites";
import Details from "./pages/Details";

// Custom hooks
import useTheme from "./hooks/useTheme";

function App() {
	// Set background to dark
	const { theme, toggleTheme } = useTheme();
	useEffect(() => {
		if (theme === "dark")
			document.documentElement.setAttribute("data-bs-theme", "dark");
		else {
			document.documentElement.setAttribute("data-bs-theme", "light");
		}
	});

	return (
		<BrowserRouter>
			<div className="d-flex flex-column gap-3">
				<Navbar theme={theme} onThemeChange={toggleTheme} />
				<h1 className="text-center">Covid Stats</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/saved" element={<Favourites />} />
				<Route path="/saved/:date" element={<Details />} />
			</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
