import React, { useState } from 'react';
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";

const CommentBox = ({BlogId}) => {
    const [comment, setComment] = useState('');
    const { blog_react } = api_routes;
    const { user_id } = getUserBrandMemberId();

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSaveComment = async () => {
        try {
            const response = await api.postByBody(blog_react, {
                customerId: user_id,
                blogId: BlogId,
                isLike: false,
                comment: comment
            });
            //console.log(response);
            setComment('');
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <textarea
                rows="2"
                cols="28"
                placeholder="Type your comment here..."
                value={comment}
                onChange={handleCommentChange}
                style={{ marginRight: '10px' , paddingLeft: '5px', paddingTop: '2px', border: '1px solid black'}}
            />
            <button
                onClick={handleSaveComment}
                style={{ padding: '8px', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>
                Save
            </button>
        </div>
    );
};

export default CommentBox;
