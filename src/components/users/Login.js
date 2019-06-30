import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import { loginAction } from '../../actions/loginAction';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleLoginData = this.handleLoginData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginData(prop) {
        return event => {
            this.setState({
                [prop]: event.target.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault()
        let userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginAction(userData)
        console.log(this.props.loggedIn)
        e.target.reset()


    }

    redirectLogin() {

        if (this.props.loggedIn) {
            return <Redirect to='/' />
        }

        if (this.props.loading) {
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        }

        if (this.props.error !== null) {
            console.log(this.props.invalid)
            document.querySelector('.error').classList.remove('d-none')
            document.querySelector('.error-con').classList.remove('d-none')

            setTimeout(function () {
                document.querySelector('.error').classList.add('d-none')
                document.querySelector('.error-con').classList.add('d-none')
            }, 9000);
        }
    }




    render() {
        return (
            <div className="row mt-5">
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    emailChanged={this.handleLoginData("email")}
                    passChanged={this.handleLoginData("password")}
                    submit={this.handleSubmit}
                />
                {this.redirectLogin()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.logedUser.loggedIn,
    error: state.logedUser.error,
    loading: state.logedUser.loading,
})

export default connect(mapStateToProps, { loginAction })(Login);