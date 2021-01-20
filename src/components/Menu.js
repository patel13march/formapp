import React, { Component } from 'react';
import './css/style.css';
class Menu extends Component {
constructor(props){
    super(props)
    this.state = { fullname: '',
                    mobile: '',
                   email: '', 
                   message: ''
                       }
}

handleChangeall= (event) =>{
 this.setState({[event.target.name]: event.target.value});
}
handleSubmit = (event)  => {
    // alert(`My Name is ${this.state.fullname}. My mobile number is ${this.state.mobile}. My email is ${this.state.email}. My Message to your company is ${this.state.message}.`);
    alert(JSON.stringify(this.state))
    event.preventDefault();

}
    render(){ 
        return(
            <div>
        
                <h2> Welcome to Menu Page. : Class component(short logic)</h2>
   <form onSubmit = {this.handleSubmit}>
       <label> Full Name: </label> <br/>
       <input type='text' name = 'fullname' value= {this.state.fullname} onChange = { this.handleChangeall}></input>  <br/>
       <label> Mobile Number: </label><br/>
       <input type='number' name = 'mobile' value= {this.state.mobile} onChange = { this.handleChangeall} ></input>  <br/>
       <label> Email ID: </label><br/>
       <input type='email' name = 'email'  value= {this.state.email} onChange = { this.handleChangeall}></input>  <br/>
       <label> Message: </label><br/>
       <textarea type='text' name = 'message'value= {this.state.message} onChange = { this.handleChangeall} ></textarea>  <br/>
       <input type='submit' value='Send'/> <br/>
   </form>

                
            </div>

        );
    }
}

export default Menu;