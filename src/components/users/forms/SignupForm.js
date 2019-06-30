import React from 'react';

const signupForm = (props) => {

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
                        id="firstName"
                        placeholder="First Name"
                        value={props.firstName}
                        onChange={props.firstNameChanged}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="otherNames"
                        placeholder="Other Names"
                        value={props.otherNames}
                        onChange={props.otherNamesChanged}
                    />
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
                        type="date"
                        className="form-control"
                        id="dob"
                        placeholder="Date of Birth"
                        value={props.dob}
                        onChange={props.dobChanged}
                    />
                </div>
                <div className="form-group">
                    <select
                        className="custom-select custom-select-sm"
                        placeholder="Gender"
                        id="gender"
                        value={props.gender}
                        onChange={props.genderChanged}
                    >
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        id="bio"
                        placeholder="Bio"
                        rows="3"
                        value={props.bio}
                        onChange={props.bioChanged}
                    ></textarea>
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
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Your Password"
                        value={props.confirmPassword}
                        onChange={props.passConfChanged}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        id="login"
                        className="form-control btn btn-info"
                        value="Signup"
                    />
                </div>
            </form>
        </div>
    )
}

export default signupForm;