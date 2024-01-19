import React from 'react'

const ViewBlog = ({ params }) => {
    return (
        <div>
            <p>Post: {params.slug}</p>
        </div>
    )
}

export default ViewBlog