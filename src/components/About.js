import React, { Component } from 'react';
import './css/style.css';
class About extends Component {
    constructor(props){
    super(props)
    this.state = { fullname: '',
                   email: '',
                   mobile: '',
                   message: ''
                       }
}
handleChange =  (event) => {
 this.setState({fullname: event.target.value});

}
handleMobile= (event) =>{
    this.setState({mobile: event.target.value});
}
handleEmail= (event) =>{
    this.setState({email: event.target.value});
}
handleMessage= (event) =>{
 this.setState({message: event.target.value});
}
handleSubmit = (event)  => {
    // alert(`My Name is ${this.state.fullname}. My mobile number is ${this.state.mobile}. My email is ${this.state.email}. My Message to your company is ${this.state.message}.`);
    alert(JSON.stringify(this.state))
    event.preventDefault();

}
    render(){
        return(
            <div>
           
                <h2> Welcome to About Page. : Classical Approach(long logic)</h2>
   <form onSubmit = {this.handleSubmit}>
       <label> Full Name: </label> <br/>
       <input type='text' value= {this.state.fullname} onChange = { this.handleChange}></input>  <br/>
       <label> Mobile Number: </label><br/>
       <input type='number'  value= {this.state.mobile} onChange = { this.handleMobile} ></input>  <br/>
       <label> Email ID: </label><br/>
       <input type='email'  value= {this.state.email} onChange = { this.handleEmail}></input>  <br/>
       <label> Message: </label><br/>
       <textarea type='text' value= {this.state.message} onChange = { this.handleMessage} ></textarea>  <br/>
       <input type='submit' value='Send'/> <br/>
   </form>

                
            </div>

        );
    }
}
export default About