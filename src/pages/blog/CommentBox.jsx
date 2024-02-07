import React, { useState } from 'react';
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";

const CommentBox = ({BlogId}) => {
    const [comment, setComment] = useState('');
    const { blog_react } = api_routes;
    const { member_id } = getUserBrandMemberId();

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSaveComment = async () => {
        //console.log('Comment saved:', comment);
        try {
            const response = await api.post(blog_react, {
                customerId: member_id,
                blogId: BlogId,
                comment: comment
            });
            console.log(response);
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
