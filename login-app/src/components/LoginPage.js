import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { useState } from "react";

export default function LoginPage() {
    const handleSubmit = (event) => {  
        event.preventDefault(); // Zapobieganie domyślnej akcji przeglądarki
        
        let body = {
            login: 'admin',
            password: 'admin'
        }

        axios({
            method: 'post',
            url: 'http://10.150.5.162/backend/auth.php',
            data: body,
            headers: {"Content-Type": "multipart/form-data"},
        }).then(function (response) { 
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });

        /*axios.post('http://10.150.5.162/backend/auth.php', {
            login: 'admin',
            password: 'password'
        }) // Wysłanie żądania HTTP POST do serwera PHP z danymi formularza w ciele żądania 
            .then((response) => { 
                console.log(response.data); // Wyświetlenie odpowiedzi JSON z serwera w konsoli 
      })*/
  }
    
    return (
        <div className="xl:w-[450px] xl:h-[450px] md:w-96 md:h-80 md:px-2 w-64 h-80 max-auto my-24 mx-auto text-center bg-slate-50/30 backdrop-blur-md rounded-md flex justify-center content-evenly flex-col">
                <form method="post" onSubmit={handleSubmit} className="opacity-100">
                    <input className="xl:w-80 xl:text-2xl xl:p-10 md:w-72 md:text-md md:p-6 text-sm w-48 text-black-800 rounded bg-white/60 mt-10 p-2" type="text" name="login" placeholder="login"/>
                    <br/>
                    <input className="xl:w-80 xl:text-2xl xl:p-10 md:w-72 md:text-md md:p-6 text-sm w-48 text-black-800 rounded bg-white/60 mt-10 p-2" type="password" name="password" placeholder="hasło"/>
                    <br/>
                    <input className="xl:w-80 xl:text-2xl xl:p-10 md:w-72 md:text-md md:p-6 text-sm w-48 text-black-800 rounded bg-white/60 mt-10 p-2" type="submit"/>
                </form>
        </div>
    );
}

