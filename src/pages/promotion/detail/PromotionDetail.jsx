import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  top: '60px',
  backgroundColor: '#FAFAFA',
  border: '1px',
  borderRadius: '5px',
}

const heading = {
  position: 'relative',
  left: '180px',
  top: '50px',
  fontSize: '16px'
}

const title = {
  position: 'absolute',
  left: '15px',
  top: '110px'
}

const date_time = {
  position: 'absolute',
  left: '15px',
  top: '140px',
  fontSize: '10px'
}

const img = {
  position: 'absolute',
  top: '180px',
  left: '135px',
}

const des = {
  position: 'absolute',
  top: '400px',
  left: '5px',
}

function PromotionDetail({ promotionId }) {

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
        {/* <section className="flex h-full">
          <article className="flex items-center justify-center basis-1/3">
            <Link to={`/promotionlist`} className="px-4 py-2 border-2 rounded-full">Back</Link>
          </article>
          <article className="flex items-center basis-2/3 ps-2">
            <h1>Promotion Detail</h1>
          </article>
        </section> */}
        <a style={icon_style} href="/promotionlist">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <h1 style={heading}>Promotions</h1>
        <svg style={share_style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>
      </header>
      <div className="basis-2/12">
            <h4 className="mt-3" style={title}>{detailData.name}</h4>
            <h6 className="my-3" style={date_time}>{formatDate(detailData.startDate)}</h6>
      </div>
      <section className="flex flex-col basis-10/12">
        <article className="flex items-center justify-center basis-1/3" style={img}>
          <img className="w-44" src={detailData.image} alt={detailData.name} />
        </article>
        <article className="flex flex-col mt-2 basis-2/3" style={des}>
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