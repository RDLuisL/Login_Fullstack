import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import "../../styles/demo.css"; // Importa el archivo CSS

export const Demo = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="contenedor">
			<img src="https://i.imgur.com/v8XvnZ4.png" alt="Well Done">
			</img>
			<h1>You are Login</h1>
		</div>
	);
};
