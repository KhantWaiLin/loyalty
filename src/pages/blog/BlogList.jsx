import React, { useEffect, useState, useContext } from "react";
import BlogListCard from "../../components/BlogListCard";
import { LanguageContext } from "../../LanguageContext";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import "./bloglist.scss";

const BlogList = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [blogList, setBlogList] = useState(null);
  const { blog_list } = api_routes;
  const [isLoading, setIsLoading] = useState(false);

  const fetchBlogData = async () => {
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();

    try {
      const response = await api.postByBody(blog_list, { brandId: brand_id });
      setBlogList(response?.data?.value?.data?.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
    changeLanguage(localStorage.getItem("language"));
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
      <a className="icon" href="/home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 className="heading">{t('blogs')}</h1>
      <a className="save" href="/blogsaved">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </a>
      {/* <BlogNav /> */}
      <div className="card-list no-scrollbar">
        {blogList?.map((blog) => (
          <BlogListCard key={blog.id} blog={blog} link={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
