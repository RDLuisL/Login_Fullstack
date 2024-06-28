import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Login = () => {
    const { store, actions } = useContext(Context);

    /*Controler Component*/
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");

    const handleClick = () => {
        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        fetch('https://3001-rdluisl-pruebabanckend-lizqov5a68i.ws-us114.gitpod.io/api/token', opts)
            .then(resp => {
                if (resp.status === 200) return resp.json();
                else alert("There has been some error")
            })
            .then(data => {
                console.log("this came from the backend", data)
                sessionStorage.setItem("token", data.access_token);
            })
            .catch(error => {
                console.error("there was an error!!, error", error);
            })
    }

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>
            <div>
                {(token && token != "" && token != undefined) ? "You are logged in with this token: " + token :
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
                }
            </div >

        </div >
    );
};
