import React from "react";
import { useSelector } from "react-redux";
import "./Comments.css";
import { getUser } from "../../store/user";


function CommentBox({comment, user}) {
    const sessionUser = useSelector(state => state.session.user)
    
    console.log(user);

    const username = useSelector(getUser(comment.commenterId))

    console.log(username);

    let returnButton;
    if(sessionUser){
        if(sessionUser._id === comment.commenterId){
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
            <h2>{user.name}</h2>
            <p>{comment.body}</p>
            {returnButton}
        </div>
    )
}

export default CommentBox;