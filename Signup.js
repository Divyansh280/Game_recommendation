import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className = "back-form-ground">
         <div className="auth-form-container">
            <h1 className="login-heading">Signup</h1>

            <form action="POST">
                <hr></hr>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <hr></hr>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <hr></hr>
                <input className='form-button' type="submit" onClick={submit} />

            </form>
            </div>
        </div>
    )
}

export default Login