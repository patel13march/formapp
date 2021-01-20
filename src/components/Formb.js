import React, { useState } from "react";

const Formb = () => {
  const style = {
    backgroundColor: "blue",
    padding: "10px 15px",
    color: "white",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer"
  };

  const [Fullname, setFullname] = useState({
    fname: "",
    number: "",
    email: "",
    password: ""
  });
  const InputEvent = (event) => {
   const value = event.target.value;
   const name = event.target.name;
    setFullname((preValue) => {
    if (name ==='fname') {
        return{
         fname: value,
         number: preValue.number,
         email: preValue.email,
         password: preValue.password
  
        }
  }else   if (name ==='number') {
    return{
     number: value,
     fname: preValue.fname,
     email: preValue.email,
     password: preValue.password
    }
}else   if (name ==='email') {
    return{
     email: value,
    fname: preValue.fname,
     number: preValue.number,
     password: preValue.password

    }
}else   if ( name ==='password') {
    return{
     password: value,
    fname: preValue.fname,
     email: preValue.email,
     number: preValue.number
    }
}
    })
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert(
      `My name is ${Fullname.fname}. My Mobile number is ${Fullname.number}. My Email is ${Fullname.email} and password is ${Fullname.password}.`
    );
  };

  return (
    <div>
      <h1>Welcome to FormB Page. : Functional approach </h1>
      <form onSubmit={onSubmits}>
        <label> Full Name: </label> <br />
        <input
          type="text"
          name= 'fname'
         value={Fullname.fname}
          onChange={InputEvent}
        />
        <br />
        <label> Mobile Number: </label>
        <br />
        <input
          type="number"
          name= 'number'
          value={Fullname.number}
          onChange={InputEvent}
        />
        <br />
        <label> Email ID: </label>
        <br />
        <input
          type="email"
          name= 'email'
         value={Fullname.email}
          onChange={InputEvent}
        />
        <br />
        <label> Password: </label>
        <br />
        <input
          type="password"
          name= 'password'
          value={Fullname.password}
          onChange={InputEvent}
        />
        <br />
        <button style={style}> Submit </button>
        <span> Already have an account?</span>
        <p>
          Login <a href="/about"> Here </a>
        </p>
      </form>
    </div>
  );
};

export default Formb;
