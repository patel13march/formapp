import React,{useState} from 'react'

const Form = () => {
    const style= {
        backgroundColor: 'blue',
        padding: '10px 15px',
        color: 'white',
        border: 'none',
        borderRadius: '1rem',
        cursor : 'pointer'
    }

const [Fullname, setFullname] = useState('');
const [Number, setNumber] = useState('');
const [Email, setMail] = useState('');
const [Password, setPassword] = useState('');


    const onSubmits = (event) => {
        event.preventDefault();
        alert(`My name is ${Fullname}. My Mobile number is ${Number}. My Email is ${Email} and password is ${Password}.`)
    }
 
    return (
        <div>
            <h1>Welcome to Form Page. : Functional approach </h1>
            <form onSubmit={onSubmits}>
       <label> Full Name: </label> <br/>
       <input type='text' value = {Fullname} onChange = { (event) =>{ setFullname  (event.target.value)}  } />   <br/>
       <label> Mobile Number: </label><br/>
       <input type='number' value= {Number} onChange = { (event) =>{ setNumber  (event.target.value)}  } />   <br/>
       <label> Email ID: </label><br/>
       <input type='email' autoComplete="on" value={Email} onChange = { (event) =>{ setMail  (event.target.value)}  } />    <br/>
       <label> Password: </label><br/>
  <input type='password' autoComplete="off" value={Password}  onChange = { (event) =>{ setPassword  (event.target.value)}  } /> <br/>

  <button style={style} > Submit </button> <span> Already have an account?</span>
       <p> Login <a href = "/about"> Here </a></p>
   </form> 
<h1>{Fullname}</h1>
        </div>
    )
}

export default Form
