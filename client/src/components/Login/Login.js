import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import API from '../../utils/API';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.send = this.send.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    send = (event) => {
        if (this.state.email.length === 0) {
            console.log('Merci de saisir une adresse mail');
            return;
        }
        if (this.state.password.length === 0) {
            console.log('Merci de saisir un mot de passe');
            return;
        }
        API.login(this.state.email, this.state.password).then(function (data) {
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        }, function (error) {
            console.log(error);
            return;
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className='Login'>
                    <FormGroup controlId='email' bsSize='large'>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl autoFocus type='email' value={this.state.email} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize='large'>
                        <ControlLabel>Mot de passe</ControlLabel>
                        <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                    </FormGroup>
                    <Button onClick={this.send} block bsSize='large' type="submit">
                        Se connecter
                    </Button>
                </div>
                <div className="Login">
                    Pas encore inscrit ? <a href="/signup">S'enregistrer</a>
                </div>
            </div>

        )
    }

}
