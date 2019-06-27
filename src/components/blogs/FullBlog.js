import React, { Component } from 'react';
import axios from 'axios';
import Blog from './blog/Blog';
import blogImage from './meet-gif.gif';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const URL = "https://blog-django-z.herokuapp.com/posts/"

class FullBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        axios.get(proxyUrl + URL).then((response) => {
            this.setState({
                blogs: response.data
            })
        }
        );
    }

    render() {
        const blogs = this.state.blogs.map((blog, index) => {
            console.log(blog.image_url)
            return <Blog
                key={index}
                title={blog.title}
                content={blog.content}
                image={blog.image_url ? blog.image_url : blogImage}
            />
        });
        return (
            <div className="row col-12 ml-3">
                {blogs}
            </div>
        );
    }
}

export default FullBlog;