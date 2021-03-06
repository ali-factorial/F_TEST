import React from 'react';
import BackHome from './BackHome';
import { checkEmail } from '../helpers';

class Form extends React.Component {
  first_nameRef = React.createRef();
  last_nameRef = React.createRef();
  emailRef = React.createRef();
  phone_numberRef = React.createRef();

  handleForm = (event) => {
    event.preventDefault();
    const contact = {
      first_name: this.first_nameRef.current.value,
      last_name: this.last_nameRef.current.value,
      email: this.emailRef.current.value,
      phone_number: this.phone_numberRef.current.value,
    }
    // if comes from new then create, if not then update
    if (this.props.addContact) {
      this.props.addContact(contact)
    } else {
      this.props.updateContact(contact)
    }
  }

  verifyEmail = (event) => {
    const email = event.currentTarget.value;
    const input = event.currentTarget.classList
    if (checkEmail(email)) {
      input.add('green');
    } else if (email == '') {
      input.remove('red');
    } else {
      input.remove('green');
      input.add('red');
    }

  }

  render () {
    return (
      <form className="form" onSubmit={this.handleForm}>
        <input defaultValue={this.props.first_name} name="first_name" ref={this.first_nameRef} type="text" placeholder="first name" required/>
        <input defaultValue={this.props.last_name} name="last_name" ref={this.last_nameRef} type="text" placeholder="last name" required/>
        <input onKeyUp={this.verifyEmail} defaultValue={this.props.email} name="email" ref={this.emailRef} type="text" placeholder="email" required/>
        <input defaultValue={this.props.phone_number} name="phone_number" ref={this.phone_numberRef} type="text" placeholder="phone number" required/>
        <button type="submit">{this.props.value}</button>
      </form>
    )
  }
}

export default Form
