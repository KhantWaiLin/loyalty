import React, { useState, useEffect, useContext } from "react";
import defaultImage from '../../../assets/images/blog_default_img.png';
import { FacebookShareButton } from 'react-share';
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../../LanguageContext";

import Loader from "../../../components/loader/Loader";
import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";

const icon_style = {
  position: 'absolute',
  left: '15px',
  top: '50px',
  backgroundColor: '#FAFAFA',
  padding: '10px',
  border: '1px',
  borderRadius: '5px',
}

const share_style = {
  position: 'absolute',
  left: '85%',
  top: '50px',
  backgroundColor: '#FAFAFA',
  border: '1px',
  padding: '10px',
  borderRadius: '5px',
}

const heading = {
  position: 'relative',
  left: '180px',
  top: '50px',
  fontSize: '16px'
}

const title = {
  marginLeft: '15px',
  marginTop: '50px',
}

const date_time = {
  marginLeft: '15px',
  fontSize: '10px'
}

const img = {
  textAlign: 'center',
}

const des = {
  marginLeft: '15px',
  textIndent: '50px',
  textAlign: 'justify',
  width: '90%',
  height: '30%',
  overflow: 'auto',
  fontSize: '12px'
}

function PromotionDetail({ promotionId }) {
  const { t, changeLanguage } = useContext(LanguageContext);
  const shareUrl = window.location.href;

  const [detailData, setDetailData] = useState('');
  const { id } = useParams();

  const { promotion_detail } = api_routes;
  const api_url = process.env.REACT_APP_API_URL;
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const getDetail = async () => {
    setIsLoading(true);
    const token = api.getToken();
    fetch(api_url+promotion_detail+id, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + token,
      }
    }).then(response => response.json()).then(result => setDetailData(result.value.data));
    setIsLoading(false);
  };

  useEffect(() => {
    getDetail();
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
    <main className="flex flex-col h-full ">
      <header className="py-3 basis-1/12">
        <a style={icon_style} href="/promotionlist">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <h1 style={heading}>{t('promotions')}</h1>
        <FacebookShareButton style={share_style} url={shareUrl}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
        </FacebookShareButton>
      </header>
      <div className="basis-2/12">
            <h4 className="mt-3" style={title}>{detailData.name}</h4>
            <h6 className="my-3" style={date_time}>{formatDate(detailData.startDate)}</h6>
      </div>
      <section className="flex flex-col basis-10/12">
        <article className="flex items-center justify-center basis-1/3" style={img}>
          <img className="w-44" src={detailData.image} alt={detailData.name} />
        </article>
        <article className="flex flex-col mt-2 basis-2/3 no-scrollbar" style={des}>
          <div className="basis-10/12">
            <p className="px-3 py-2">
              {detailData.description}
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default PromotionDetail;


// `${baseURL}?PromoId=${promoId}`