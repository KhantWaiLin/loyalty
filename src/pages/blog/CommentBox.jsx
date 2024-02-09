import React, { useState } from 'react';
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import Send from "../../assets/icons/send.svg";

const commentBoxStyle = {
    display: 'flex',
    width: '321px',
    padding: '10px 24px',
    alignItems: 'center',
    gap: '16px',
    borderRadius: '8px',
    border: '1px solid var(--Primary-Gray-gray-50, #F0F1F3)',
    background: 'var(--Default-White, #FFF)',
}

const CommentBox = ({BlogId}) => {
    const [comment, setComment] = useState('');
    const { blog_react } = api_routes;
    const { user_id } = getUserBrandMemberId();
    const iconSize = "50px";

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
                placeholder="Type Something..."
                value={comment}
                onChange={handleCommentChange}
                style={commentBoxStyle}
            />
            <button
                onClick={handleSaveComment}
                >
                <img
                    src={Send}
                    alt="send-icon"
                    className="w-full h-full"
                    style={{
                        width: iconSize,
                        height: iconSize
                    }}
                />
            </button>
        </div>
    );
};

export default CommentBox;
