import React from 'react';

const loginForm = (props) => {

    return (
        <div className="col-5 offset-3">
            <form action="" className="form" onSubmit={props.submit}>
                <div className='d-none error-con form-group text-center py-2'>
                    <span className="error d-none text-danger"> Invalid  Email or password </span>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                        value={props.email}
                        onChange={props.emailChanged}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Your Password"
                        value={props.password}
                        onChange={props.passChanged}
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
    )
}

export default loginForm;