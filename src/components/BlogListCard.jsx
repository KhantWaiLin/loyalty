import React, { useState, useEffect } from "react";
import Unlike from "../assets/icons/like-icon.svg";
import Like from "../assets/icons/like.svg";
import Comment from "../assets/icons/comment-icon.svg";

import api from "../api/api";
import { api_routes } from "../utils/apiRoute";
import { getUserBrandMemberId } from "../utils/getBrandUserId";

const cardStyle = {
  width: '388px',
  height: '260px',
  border: '1px solid #F0F1F3',
  borderRadius: '20px',
  padding: '10px',
};

const imageSectionStyle = {
  width: '80%',
  height: '140px',
  borderRadius: '8px',
  overflow: 'hidden',
  objectFit: 'cover',
};

function BlogListCard({ blog, link }) {
  const url = '/blog/';
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(blog?.likeCount);

  const { saved_blogs, blog_react } = api_routes;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const react = async () => {
    const { user_id } = getUserBrandMemberId();
    try {
      const response = await api.postByBody(blog_react, {
        customerId: user_id,
        blogId: link,
        isLike: !liked,
        comment: null
      });
      setLiked(!liked);
      setLikeCount(response.data.value.data.likeCount);
    } catch (error) {
      console.error("Error reacting to the blog:", error);
    }
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const { user_id } = getUserBrandMemberId();
        const response = await api.postByBody(saved_blogs, { customerId: user_id, savedTab: false });
        const likedBlogs = response?.data?.value?.data?.data || [];
        const isLiked = likedBlogs.some(blogItem => blogItem.blogId === link);
        setLiked(isLiked);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [link, saved_blogs]);

  return (
    <div style={cardStyle}>
      <a href={url + link}>
        <div style={imageSectionStyle}>
          <img
            className="w-full h-full object-contain"
            src={blog?.image}
            alt="Card Image"
          />
        </div>
        <p className="text-base font-normal not-italic text-[#48505E]">
          {blog?.title}
        </p>
        <p className="text-sm font-normal mt-[8px] not-italic text-[#989FAD]">
          {blog?.createdDate} by {blog?.author}
        </p>
      </a>
      <div className="w-full flex justify-start items-center gap-5">
        <div className="flex items-center gap-2">
          <button onClick={react} className="w-5 h-5">
            <img src={liked ? Like : Unlike} alt="like-icon" className="w-full h-full" />
          </button>
          <p className="text-[#667085] text-[12px]">{likeCount}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-5 h-5">
            <img src={Comment} alt="like-icon" className="w-full h-full" />
          </button>
          <p className="text-[#667085] text-[12px]">Comment</p>
        </div>
      </div>
    </div>
  );
}

export default BlogListCard;
