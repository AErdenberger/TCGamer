import React from "react";
import { useSelector } from "react-redux";
import "./Comments.css";


function CommentBox({comment, user}) {
    const sessionUser = useSelector(state => state.session.user);

    let returnButton;
    if(sessionUser){
        if(sessionUser.id === comment.commenterId){
        returnButton = (
            <div>
                <button id="button-delete">Delete</button>
                <button id="button-update">Edit</button>
            </div>
            )
        }
        } else {
            returnButton = (
                undefined
            )
    }

    return (
        <div className="commentBox">
            <h2>{user.username}</h2>
            <p>{comment.body}</p>
            {returnButton}
        </div>
    )
}

export default CommentBox;