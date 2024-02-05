import React from "react";
import Like from "../../assets/icons/like-icon.svg";
import Comment from "../../assets/icons/comment-icon.svg";

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

const BlogFooter = () => {
    const iconSize = "25px";

    return (
        <div
            style={styles.footerWrapper}
            className="footer-wrapper w-full flex justify-between z-10 absolute py-2 px-4 pb-[34px] bottom-0"
        >
            <button
                type="button"
                style={styles.button}
            >
                <img src={Like} alt="like-icon" className="w-full h-full" style={{ width: iconSize, height: iconSize }} />
                <span className={`text-[#667085] text-[${iconSize}] font-medium`}>2</span>
            </button>
            <button
                type="button"
                style={styles.button}
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
        </div>
    );
};

export default BlogFooter;
