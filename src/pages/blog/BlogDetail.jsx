import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BlogFooter from "./BlogFooter";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";

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
    top: '120px',
    fontSize: '10px'
}

const image = {
    position: 'absolute',
    top: '150px',
    left: '15px',
    width: '380px',
    height: '175px',
    border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
    borderRadius: '5px',
}

const blog_content = {
    position: 'absolute',
    top: '330px',
    left: '15px',
    textIndent: '50px',
    textAlign: 'justify',
    width: '390px',
    height: '270px',
    overflow: 'auto',
}

const BlogDetail = () => {

    const { id } = useParams();

    const [blogDetail, setBlogDetail] = useState(null);
    const { blog_detail } = api_routes;
    const [isLoading, setIsLoading] = useState(false);

    const fetchBlogData = async () => {
        setIsLoading(true);

        try {
            const response = await api.get(blog_detail, { BlogId: id });
            //console.log(response.data.value.data);
            setBlogDetail(response?.data?.value?.data);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

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
            <svg style={saveStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

            <div style={title_style}>{blogDetail?.title}</div>
            <div style={date_style}>September 7, 2024</div>
            <img style={image} src={blogDetail?.image} alt="blog-image" />
            <div style={blog_content} className="no-scrollbar">
                {blogDetail?.description}
            </div>
            <BlogFooter/>
        </div>
    );
};

export default BlogDetail;
