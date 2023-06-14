import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comments.css";
import { deleteComment, updateComment } from "../../store/comment";


function CommentBox({comment, user, card}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState("");

    const handleEdit = () => {
        setEditing(true);
        setBody(comment.body)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let newComment = {};
        newComment.id = comment.id;
        newComment.commenterId = sessionUser.id;
        newComment.cardId = card;
        newComment.body = body;
        setEditing(false);
        return dispatch(updateComment(newComment));
    }

    const update = (field) => {
        return e => {
          switch (field) {
            case 'body':
                setBody(e.currentTarget.value);
                break;
            default:
                console.error('Field name error');
                break;
            }
        }
    }

    let returnButton;
    if(sessionUser){
        if(sessionUser.id === comment.commenterId){
        returnButton = (
            <div className="UpdateAndDelete">
                <button id="button-delete" onClick={() => dispatch(deleteComment(comment.id))}>Delete</button>
                <button id="button-update" onClick={handleEdit}>Edit</button>
            </div>
            )
        }
        } else {
            returnButton = (
                undefined
            )
    }

    if(editing){
        return (
            <div className="UpdatingComment">
                <form onSubmit={handleUpdate} >
                    <textarea value={body} onChange={update('body')} id="update-text-box"/>
                    <input id="submit-update" type="submit" value={"Update"}/>
                </form>
            </div>
        )
    } else {
        return (
            <div className="commentBox">
                <h3>{user?.username}</h3>
                <p>{comment?.body}</p>
                {returnButton}
            </div>
        )
    }
}

export default CommentBox;