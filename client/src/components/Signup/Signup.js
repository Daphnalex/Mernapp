import React, { Component } from 'react'
import API from "../../utils/API";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap"

export default class signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            cpassword: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    send = (event) => {
        if(this.state.email.length === 0){
            console.log('Merci de saisir un email');
            return;
        } 
        if(this.state.password.length === 0){
            console.log('Merci de saisir un mot de passe');
            return;
        }
        if (this.state.cpassword.length === 0){
            console.log('Merci de confirmer votre mot de passe')
            return;
        }
        if (this.state.password !== this.state.cpassword){
            console.log('Merci de saisir un mot de passe identique');
            return;
        }
        var _send = {
            email: this.state.email,
            password: this.state.password
        }
        API.signup(_send).then(function(data){
            localStorage.setItem('token',data.data.token);
            window.location = "/dashboard";
        }, function(error){
            console.log(error);
            return;
        });
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
        <div className="login">
            <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type='email' value={this.state.email} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="password" bsSize='large'>
            <ControlLabel>Mot de passe</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
        </FormGroup>
        <FormGroup controlId="cpassword" bsSize='large'>
            <ControlLabel>Confirmer mot de passe</ControlLabel>
            <FormControl value={this.state.cpassword} onChange={this.handleChange} type="password" />
        </FormGroup>
        <Button onClick={this.send} block bsSize='large' type="submit">
            S'enregistrer
        </Button>
        </div>
        )
    }
}
