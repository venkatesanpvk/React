import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { isEmpty } from 'lodash';
import { getValues } from './action/basicAction';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }  
    this.setValue=this.setValue.bind(this);
    this.Validate = this.Validate.bind(this);
    this.notify=this.notify.bind(this); 
}
setValue(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}
Validate(){
  const { email, password } = this.state;
  var valid_email=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email);
  var valid_pass=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if(valid_email===true && valid_pass===true){
    return true;
  }
  else{
    return false;
  }
}
notify(e){
  e.preventDefault();
  if(this.Validate()===true){
    const { email, password } = this.state;
    const data={"email":email,"password":password};
    this.props.getValues(data);
    // console.log(data);
  }
  else{
    alert("not valid");
  }
}


render(){
  const { objects } = this.props;
  console.log(objects)
  return(
    <div className="app">
      <form onSubmit={this.notify.bind(this)}>
        <h1>LOGIN or <mark>SIGNIN</mark></h1>
        <label>USERNAME:<input type="text" name="email" value={this.state.email} onChange={this.setValue}/></label><br/>
        <label>PASSWORD:<input type="text" name="password" value={this.state.passwword} onChange={this.setValue}/></label><br/>
        <button type="submit">Login</button>
      </form>
      {
        !isEmpty(objects) && <div><h2>{objects.email}</h2><h2>{objects.password}</h2></div>
      }
    </div>
    );
}
}

const mapStateToProps = state => {
  console.log(state);
  return {
    objects: state.setValues
  }
}
export default connect(mapStateToProps, {getValues})(App);