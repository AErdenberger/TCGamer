import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comments.css";
import { deleteComment } from "../../store/comment";


function CommentBox({comment, user}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let returnButton;
    if(sessionUser){
        if(sessionUser.id === comment.commenterId){
        returnButton = (
            <div className="UpdateAndDelete">
                <button id="button-delete" onClick={() => dispatch(deleteComment(comment.id))}>Delete</button>
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
            <h3>{user.username}</h3>
            <p>{comment.body}</p>
            {returnButton}
        </div>
    )
}

export default CommentBox;