import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./tailwind-output.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {HeroUIProvider} from "@heroui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HeroUIProvider>
				<App />
			</HeroUIProvider>
		</BrowserRouter>
	</React.StrictMode>
);