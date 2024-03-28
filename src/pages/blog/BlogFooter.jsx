import {React, useState, useEffect} from "react";
import Like from "../../assets/icons/like.svg";
import Unlike from "../../assets/icons/like-icon.svg";
import Comment from "../../assets/icons/comment-icon.svg";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

const styles = {
    footerWrapper: {
        background: "#fff",
        boxShadow:
            "0px -3px 6px 0px rgba(209, 209, 209, 0.1)," +
            "0px -12px 12px 0px rgba(209, 209, 209, 0.09)," +
            "0px -26px 16px 0px rgba(209, 209, 209, 0.05)," +
            "0px -46px 19px 0px rgba(209, 209, 209, 0.01)," +
            "0px -72px 20px 0px rgba(209, 209, 209, 0)",
    },
    button: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginLeft: '20px',
        marginRight: '20px'
    },
    icon: {
        width: "25px",
        height: "25px"
    }
};

const BlogFooter = ({ BlogId, isLiked, like, comment, commentLength, footerOpen, setFooterOpen}) => {
    const iconSize = "25px";
    const [likeCount, setLikeCount] = useState(null);
    const { blog_react } = api_routes;
    const { user_id } = getUserBrandMemberId();
    const [liked, setLiked] = useState(false);
    const [isCommentListOpen, setIsCommentListOpen] = useState(true);
  
    useEffect(() => {
      setLiked(isLiked);
    }, [isLiked]);
  
    useEffect(() => {
        if(footerOpen==false && isCommentListOpen==false){
            setIsCommentListOpen(true);
            setFooterOpen(true);
        }
    }, [footerOpen, isCommentListOpen]);

    const react = async () => {
      try {
        const response = await api.postByBody(blog_react, {
          customerId: user_id,
          blogId: BlogId,
          isLike: true,
          comment: null,
        });
        setLikeCount(response.data.value.data.likeCount);
        setLiked(!liked);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
  
    const toggleCommentList = () => {
      comment();
      setIsCommentListOpen(false);
    };

    return (
        <div
            style={!isCommentListOpen ? { ...styles.footerWrapper, display: 'none' } : styles.footerWrapper}
            className="footer-wrapper w-full flex justify-between z-10 absolute py-2 px-4 pb-[34px] bottom-0"
        >
            <button type="button" style={styles.button} onClick={react}>
                <img
                    src={liked ? Like : Unlike}
                    alt="like-icon"
                    className="w-full h-full"
                    style={styles.icon}
                />
                <span className={`text-[#667085] text-[${iconSize}] font-medium`}>
                    {likeCount ? likeCount : like}
                </span>
            </button>
            <button
                type="button"
                style={styles.button}
                onClick={toggleCommentList}
            >
                <img src={Comment} alt="comment-icon" className="w-full h-full" style={{ width: iconSize, height: iconSize }} />
                <span className={`text-[#667085] text-[${iconSize}] font-medium`}>{commentLength}</span>
            </button>
            <a
                type="button"
                style={styles.button}
                href="/blogsaved"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-full h-full"
                    style={{ width: iconSize, height: iconSize }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                </svg>
            </a>
        </div>
    );
};

export default BlogFooter;
