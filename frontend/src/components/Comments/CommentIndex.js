import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../store/comment";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function commentIndex() {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const cardId = useParams();
}

export default commentIndex;