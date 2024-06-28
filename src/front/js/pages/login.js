import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Login = () => {
    const { store, actions } = useContext(Context);

    /*Controler Component*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    console.log("This is your token", token);

    const handleClick = () => {
        actions.Login(email, password).then(() => {
            navigate("/demo")
            //Navigate es para indicar a que ruta va a ir el navegador cuando el acton del Login  verifique que coinciden 
            //email y password. En este caso lo envio a /demo
        })
    }

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>
            <div>
                {(token && token != "" && token != undefined) ? (
                    "You are logged in with this token: " + token
                ) : (
                    <div>
                        <input type="test" placeholder="escribe el email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {/* el onChange captura el evento ya que es cualquier cosa que cambie el estado inicial que en este caso es null */}
                        <input
                            type="password"
                            placeholder="escribe el password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* el onChange captura el evento ya que es cualquier cosa que cambie el estado inicial que en este caso es null */}
                        <button onClick={handleClick}> Login</button>
                    </div>
                )}
            </div >

        </div >
    );
};
