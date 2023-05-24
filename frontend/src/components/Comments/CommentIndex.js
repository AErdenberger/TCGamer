import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardComments, fetchComments, getComments } from "../../store/comment";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import CommentBox from "./CommentBox";

function commentIndex() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const cardId = useParams();

    useEffect(() => {
        if (cardId){
            dispatch(fetchCardComments(cardId))
        } else {
            dispatch(fetchComments())
        }
    }, [dispatch, comments, cardId]);

    return (
        <div>
            <ul className="AllTheComments">
                {comments.map(comment => {
                    return <CommentBox key={comment.id} user={commenterId} card={cardId}/>
                })}
            </ul>
        </div>
    )
}

export default commentIndex;