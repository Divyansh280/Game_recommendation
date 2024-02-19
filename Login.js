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

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
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
            <h1 className="login-heading">Login</h1>
            <hr></hr>
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <hr></hr>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <hr></hr>
                <input className='form-button' type="submit" onClick={submit}/>
                {/* <button className = "Link-button form-button" type="submit" onClick = {() => props.setSwitch(1)}>Submit</button> */}
                <hr></hr>
            </form>
            </div>
        </div>
    )
}

export default Login