import React, { useEffect, useState } from "react";
import BlogListCard from "../../components/BlogListCard";
import BlogNav from "./BlogNav";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

const cardListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginLeft: '17px',
  marginTop: '15%',
  width: '90%',
  overflow: 'auto',
  scrollbarWidth: 'thin',
};

const headingStyle = {
  marginLeft: '200px',
  marginTop: '20px',
};

const iconStyle = {
  position: 'absolute',
  left: '17px',
  top: '20px',
  backgroundColor: '#FAFAFA',
  padding: '8px',
  border: '1px',
  borderRadius: '5px',
};

const saveStyle = {
  position: 'absolute',
  left: '380px',
  top: '20px',
  transform: 'translateX(-100%)',
  backgroundColor: '#FAFAFA',
  border: '1px',
  padding: '8px',
  borderRadius: '5px',
};

const BlogList = () => {
  const [blogList, setBlogList] = useState(null);
  const { blog_list } = api_routes;
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogData = async () => {
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();

    try {
      const response = await api.postByBody(blog_list, { brandId: brand_id });
      //console.log(response.data.value.data.data);
      setBlogList(response?.data?.value?.data?.data);
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
      <a style={iconStyle} href="/home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={headingStyle}>Blogs</h1>
      <a style={saveStyle} href="/blogsaved">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </a>
      {/* <BlogNav /> */}
      <div style={cardListStyle} className="no-scrollbar">
        {blogList?.map((blog) => (
          <BlogListCard key={blog.id} blog={blog} link={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
