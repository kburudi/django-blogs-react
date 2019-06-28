import React from 'react';

const blog = (props) => {

    return (
        <div className="card col-3 mr-auto">
            <img src={props.image} className="card-img-top" alt="blog image" />
            <div className="card-body">
                <h5 className="card-title">
                    {props.title.substring(0, 30)}
                </h5>
                <p className="card-text">
                    {props.content.substring(0, 65)}...
                </p>
                <a href="#" className="btn btn-md btn-block btn-primary">View Post</a>
            </div>
        </div>
    )
}

export default blog;