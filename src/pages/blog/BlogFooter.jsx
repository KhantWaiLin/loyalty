import React from "react";
import Like from "../../assets/icons/like.svg";
import Unlike from "../../assets/icons/like-icon.svg";
import Comment from "../../assets/icons/comment-icon.svg";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import BlogModel from "./BlogModel";

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
    },
};

const BlogFooter = ({ BlogId, like, comment }) => {
    const iconSize = "25px";
    const { blog_react } = api_routes;
    const { member_id } = getUserBrandMemberId();
    const [liked, setLiked] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const react = async () => {
        try {
            const response = await api.post(blog_react, {
                customerId: member_id,
                blogId: BlogId,
                isLike: true,
            });
            console.log(response);
            setLiked(true);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };

    const commentList = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => setIsModalOpen(false);

    return (
        <div
            style={styles.footerWrapper}
            className="footer-wrapper w-full flex justify-between z-10 absolute py-2 px-4 pb-[34px] bottom-0"
        >
            <button type="button" style={styles.button} onClick={react}>
                <img
                    src={liked ? Like : Unlike}
                    alt="like-icon"
                    className="w-full h-full"
                    style={{
                        width: iconSize,
                        height: iconSize
                    }}
                />
                <span className={`text-[#667085] text-[${iconSize}] font-medium`}>
                    {like}
                </span>
            </button>
            <button
                type="button"
                style={styles.button}
                onClick={commentList}
            >
                <img src={Comment} alt="comment-icon" className="w-full h-full" style={{ width: iconSize, height: iconSize }} />
                <span className={`text-[#667085] text-[${iconSize}] font-medium`}>10</span>
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
            <BlogModel isOpen={isModalOpen} onClose={closeModal}>
                <h2>Comments</h2>
            </BlogModel>
        </div>
    );
};

export default BlogFooter;
