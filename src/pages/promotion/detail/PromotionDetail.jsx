import React, {useState, useEffect} from "react";
import Footer from "../../../layouts/Footer";
import { Link } from "react-router-dom";

function PromotionDetail({promotionId}) {
  /**
   * const baseURL = `https://loyaltybim.azurewebsites.net/api/Customer/GetPromotionDetailById?PromoId=${promotionId}`;
   * promotionId is not working
   */

  const baseURL = `https://loyaltybim.azurewebsites.net/api/Customer/GetPromotionDetailById?PromoId=3565e528-31d7-4f5f-876e-08dc1c4b5c8d`;

  const authURL = "https://loyaltybim.azurewebsites.net/api/Authentication/Authenticate";

  const [token, setToken] = useState("");
  const [detailData, setDetailData] = useState('');

  useEffect(() => {
    fetch(authURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(auth)
    }).then(response => response.json()).then(result => setToken(result.data.token));
    
    if (token) {
      fetch(baseURL, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }).then(response => response.json()).then(result => setDetailData(result.value));
    }

  }, [token]);

  const auth = {
    "userName": "09422924858",
    "password": "jujuJu1",
    "userType": 2
  };

  let promotionDetailData = "";

  if (detailData) {
    promotionDetailData = detailData.data;
  }

  return (
    <main className="flex flex-col h-full ">
      <header className="py-3 basis-1/12">
        <section className="flex h-full">
          <article className="flex items-center justify-center basis-1/3">
            <Link to={`/promotion-list`} className="px-4 py-2 border-2 rounded-full">Back</Link>
          </article>
          <article className="flex items-center basis-2/3 ps-2">
            <h1>Promotion Detail</h1>
          </article>
        </section>
      </header>
      <section className="flex flex-col basis-10/12">
        <article className="flex items-center justify-center basis-1/3">
          <img className="w-44" src={promotionDetailData.image} alt={promotionDetailData.name} />
        </article>
        <article className="flex flex-col mt-2 basis-2/3">
          <div className="basis-2/12">
            <h4 className="mt-3">{promotionDetailData.name}</h4>
            <h6 className="my-3">{promotionDetailData.startDate}</h6>
          </div>
          <div className="basis-10/12">
            <p className="px-3 py-2">
              {promotionDetailData.description}
            </p>
          </div>
        </article>
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionDetail;


// `${baseURL}?PromoId=${promoId}`