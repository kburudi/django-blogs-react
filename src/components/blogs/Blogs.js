import React, { Component } from 'react';
import Blog from './actions/Blog';
import blogImage from './meet-gif.gif';
import { connect } from 'react-redux';
import { fetchAction } from './actions/getBlogs';

class Blogs extends Component {
    componentDidMount() {
        this.props.fetchAction();
        console.log(this.props)
    }


    render() {
        let blogs = [];
        if (this.props.blogs !== undefined) {
            blogs = this.props.blogs.map((blog, index) => {
                return <Blog
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    image={blog.image_url ? blog.image_url : blogImage}
                />
            });
        } else {
            blogs = <div>
                <h1>No blogs found</h1>
            </div>
        }
        return (
            <div className="row col-12 ml-3">
                {blogs}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blogs.blogs
})

export default connect(mapStateToProps, { fetchAction })(Blogs);
