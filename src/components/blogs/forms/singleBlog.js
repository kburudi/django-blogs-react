import React from 'react';

const singleBlog = (props) => {

    return (
        <div class="row">
            <div class="card col-10 m-auto" style="width: 18rem;">
                <img src={props.image} width="500px" height="350px" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3> {props.title} </h3>
                    <p class="card-text">{props.content}.</p>
                </div>
                <div class="card-footer text-center bg-white">
                    <button class="btn btn-primary mr-3">
                        <a class="text-white text-decoration-none" href="#">Update</a>
                    </button>
                    <button class="btn btn-danger mr-3">
                        <a class="text-white text-decoration-none" href="#">Delete</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default singleBlog;