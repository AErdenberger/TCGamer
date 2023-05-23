import React from "react";


function CommentBox({comment, user}) {
    

    return (
        <div className="commentBox">
            <h3>{user.name}</h3>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentBox;