import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comments.css";
import { fetchUsers, getUser } from "../../store/user";


function CommentBox({comment, user}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    
    console.log(user);
    
    useEffect(() => {
        dispatch(fetchUsers);
    }, [dispatch])
    
    const users = useSelector(state => state.users);
    
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