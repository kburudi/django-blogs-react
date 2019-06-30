import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignupForm from './forms/SignupForm';
import { connect } from 'react-redux';
import signupAction from '../../actions/signupAction';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            otherNames: '',
            email: '',
            bio: '',
            dob: '',
            gender: '',
            password: '',
            confirmPassword: ''
        }

        this.handleSignData = this.handleSignData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignData(prop) {
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
            password: this.state.password,
            profile: {
                first_name: this.state.firstName,
                other_names: this.state.otherNames,
                bio: this.state.bio,
                gender: this.state.gender,
                year_of_birth: this.state.dob + " 00:00",
            }
        }
        this.props.signupAction(userData)
        e.target.reset()
        console.log(userData)
    }

    redirectToLogin() {

        if (this.props.signedUp) {
            return <Redirect to='/login' />
        }

        if (this.props.loading) {
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        }

        if (this.props.error !== null) {
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
                <SignupForm
                    email={this.state.email}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    firstName={this.state.firstName}
                    otherNames={this.state.otherNames}
                    bio={this.state.bio}
                    dob={this.state.dob}
                    gender={this.state.gender}
                    firstNameChanged={this.handleSignData("firstName")}
                    otherNamesChanged={this.handleSignData("otherNames")}
                    bioChanged={this.handleSignData("bio")}
                    genderChanged={this.handleSignData("gender")}
                    dobChanged={this.handleSignData("dob")}
                    emailChanged={this.handleSignData("email")}
                    passChanged={this.handleSignData("password")}
                    passConfChanged={this.handleSignData("confirmPassword")}
                    submit={this.handleSubmit}
                />
                {this.redirectToLogin()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    signedUp: state.signupUser.signedUp,
    error: state.signupUser.error,
    loading: state.signupUser.loading,
})

export default connect(mapStateToProps, { signupAction })(Signup);