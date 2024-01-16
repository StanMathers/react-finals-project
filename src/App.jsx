// Third party libraries
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/general/Navbar"
import Favourites from "./pages/Favourites";
import Details from "./pages/Details";

function App() {
	// Set background to dark

	return (
		<BrowserRouter>
			<Navbar />
			<h1 className="text-center">Covid Stats</h1>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/saved" element={<Favourites />} />
				<Route path="/saved/:date" element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
