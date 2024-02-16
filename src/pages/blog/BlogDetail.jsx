import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BlogFooter from "./BlogFooter";
import CommentCard from "./CommentCard";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import BlogModel from "./BlogModel";
import CommentBox from "./CommentBox";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

const iconStyle = {
    position: 'absolute',
    left: '15px',
    top: '52px',
    backgroundColor: '#FAFAFA',
    padding: '8px',
    border: '1px',
    borderRadius: '5px'
}

const saveStyle = {
    position: 'absolute',
    left: '85%',
    top: '55px',
    backgroundColor: '#FAFAFA',
    border: '1px',
    padding: '8px',
    borderRadius: '5px'
}

const title_style = {
    position: 'absolute',
    left: '15px',
    top: '100px',
}

const date_style = {
    position: 'absolute',
    left: '15px',
    top: '20%',
    fontSize: '10px'
}

const image = {
    position: 'absolute',
    top: '25%',
    left: '15px',
    width: '380px',
    height: '175px',
    border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
    borderRadius: '5px',
}

const blog_content = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    textIndent: '50px',
    textAlign: 'justify',
    width: '390px',
    height: '50%',
    overflow: 'auto',
}

const commentSection = {
    position: 'absolute',
    top: '85%'
}

const headingStyle = {
    position: 'absolute',
    left: '40%',
    top: '1%'
}

const comments = {
    position: 'absolute',
    top: '10%',
    width: '90%',
    height: '80%',
    overflowY: 'auto',
}

const BlogDetail = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    const { blog_detail, save_blog, saved_blogs } = api_routes;
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
    const [liked, setLiked] = React.useState(false);
    const [blogsSaved, setBlogsSaved] = React.useState(null);
    const [blogsLiked, setBlogsLiked] = React.useState(null);
    const [commentLength, setCommentLength] = React.useState(null);
    const [footerOpen, setFooterOpen] = React.useState(true);
    const [commentListFromComment, setCommentListFromComment] = React.useState(null);

    const dataFromFooter = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFooterOpen(false);
    }

    const fetchBlogData = async () => {
        setIsLoading(true);
        try {
            const response = await api.get(blog_detail, { BlogId: id });
            setCommentLength(response.data.value.data.commentList.length);
            setBlogDetail(response?.data?.value?.data);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const savedBlog = async () => {
        const { user_id } = getUserBrandMemberId();
        try {
            await api.postByBody(save_blog, { customerId: user_id, BlogId: id, isSaved: !saved });
            setSaved(!saved);
        } catch (error) {
            console.error("Error saving blog:", error);
        }
    };

    const isSavedBlog = async () => {
        const { user_id } = getUserBrandMemberId();
        try {
            const response = await api.postByBody(saved_blogs, { customerId: user_id, savedTab: true });
            setBlogsSaved(response?.data?.value?.data?.data);
        } catch (error) {
            console.error("Error fetching saved blogs:", error);
        }
    };

    const isLikedBlog = async () => {
        const { user_id } = getUserBrandMemberId();
        try {
            const response = await api.postByBody(saved_blogs, { customerId: user_id, savedTab: false });
            setBlogsLiked(response?.data?.value?.data?.data);
        } catch (error) {
            console.error("Error fetching saved blogs:", error);
        }
    };

    const dataFromComment = (data) => {
        if (data) {
            setCommentListFromComment(data);
        }
    }

    useEffect(() => {
        fetchBlogData();
        isSavedBlog();
        isLikedBlog();
    }, [id]);

    useEffect(() => {
        if (blogsSaved) {
            const isSaved = blogsSaved.some(blog => blog.blogId === id);
            setSaved(isSaved);
        }
        if (blogsLiked) {
            const isLiked = blogsLiked.some(blog => blog.blogId === id);
            setLiked(isLiked);
        }
    }, [blogsSaved, blogsLiked, id]);

    if (isLoading) {
        return (
            <div className="reward-wrapper items-center flex flex-col justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="text-black-500 text-lg">
            <a style={iconStyle} href="/bloglist">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </a>
            <a onClick={savedBlog}>
                <svg style={saveStyle} xmlns="http://www.w3.org/2000/svg" fill={saved ? 'red' : 'none'} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </a>

            <div style={title_style}>{blogDetail?.title}</div>
            <div style={date_style}>{blogDetail?.createdDate} by {blogDetail?.author}</div>
            <img style={image} src={blogDetail?.image} alt="blog-image" />
            <div style={blog_content} className="no-scrollbar">
                {blogDetail?.description}
            </div>
            <BlogFooter
                BlogId={id}
                isLiked={liked}
                like={blogDetail?.likeCount}
                comment={dataFromFooter}
                commentLength={commentLength}
                footerOpen={footerOpen}
                setFooterOpen={setFooterOpen}
            />
            <BlogModel isOpen={isModalOpen} onClose={closeModal}>
                <div style={headingStyle}>Comments</div>
                <div style={comments} className="no-scrollbar">
                    {commentListFromComment
                        ? commentListFromComment.map((comment) =>
                            comment.comment ? (
                                <CommentCard key={comment.id} comment={comment} />
                            ) : null
                        )
                        : blogDetail?.commentList.map((comment) =>
                            comment.comment ? (
                                <CommentCard key={comment.id} comment={comment} />
                            ) : null
                        )}
                </div>
                <div style={commentSection}>
                    <CommentBox BlogId={id} data={dataFromComment} />
                </div>
            </BlogModel>
        </div>
    );
};

export default BlogDetail;
