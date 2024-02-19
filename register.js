import { useState } from "react";
import './../App.css';

export const Register =  (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(email);
    }
    
    return (
        <div className="back-form-ground">
      <div className = "auth-form-container">
        <form className = "Register-Form" onSubmit={handleSubmit}>
        <h2 className="login-heading">Register Page</h2>

        {/* <label htmlFor className="elements-heading">Full Name</label>
        <input value = {name} onChange = {(e) => setName(e.target.value)} type="text" placeholder="John Doe" id="name" name = "name"/>
        <br></br> */}
        <br></br>
        <br></br>
        <label htmlFor className="elements-heading ml-5">Email</label>
        <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email" placeholder="123@gmail.com" id="email" name = "email"/>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor = "password" className="elements-heading">Password</label>
        <input value = {password} onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" name = "password"/>    
        <br></br>
        <br></br>
        <br></br>
        <button className = "Link-button form-button" type="submit" onClick = {() => props.setSwitch(1)}>Submit</button> 

        </form>
      </div>
      </div>
    )
}