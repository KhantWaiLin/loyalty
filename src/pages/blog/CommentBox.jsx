import React, { useState } from 'react';
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import Send from "../../assets/icons/send.svg";
import './bloglist.scss';
import PropTypes from 'prop-types';

const CommentBox = ({BlogId, data}) => {
    CommentBox.propTypes = {
    BlogId: PropTypes.string,
    data: PropTypes.any,
 };
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
            data(response.data.value.data.commentList);
            setComment('');
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };

    return (
        <div className='cmBox'>
            <textarea
                rows="2"
                cols="28"
                placeholder="Type Something..."
                value={comment}
                onChange={handleCommentChange}
                className='commentBoxStyle'
            />
            <button
                onClick={handleSaveComment}
                >
                <img
                    src={Send}
                    alt="send-icon"
                    className="w-full h-full img"
                />
            </button>
        </div>
    );
};

export default CommentBox;