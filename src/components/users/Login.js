import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedin: false,
            invalid: false,
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

        this.setState({ 'loggedin': false })

        let { email, password } = this.state
        e.target.reset()

        axios.post("https://cors-anywhere.herokuapp.com/https://blog-django-z.herokuapp.com/users/login/", {
            "email": email,
            "password": password,
        })
            .then(data => {
                this.setState({ 'loggedin': true })
                localStorage.setItem('token', data.token)
            })
            .catch(err => {
                console.log(err);
                this.setState({ 'loggedin': false })
                this.setState({ 'invalid': true })
                localStorage.setItem('token', undefined)

            });
    }

    redirectLogin() {
        if (this.state.loggedin) {
            return <Redirect to='/' />
        }

        if (this.state.invalid) {
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
            <div>
                <div className="col-5 offset-3">
                    <form action="" className="form" onSubmit={this.handleSubmit}>
                        <div className='d-none error-con form-group text-center py-2'>
                            <span className="error d-none text-danger"> Invalid  Email or password </span>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Your Email"
                                value={this.state.email}
                                onChange={this.handleLoginData("email")}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                                value={this.state.password}
                                onChange={this.handleLoginData("password")}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                id="login"
                                className="form-control btn btn-info"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;