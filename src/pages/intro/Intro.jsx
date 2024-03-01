import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../../assets/images/Login.svg";
import IntroModal from "./IntroModal";
import { Link } from 'react-scroll';

import { useNavigate } from "react-router-dom";

import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import { api_routes } from "../../utils/apiRoute";
import api from "../../api/api";

const Intro = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const { get_member_info } = api_routes;
    const { brand_id, user_id } = getUserBrandMemberId();
  
    const check_token = async () => {
      const headers = {
        Authorization: `Bearer ${api.getToken()}`,
        "Content-Type": "application/json",
      };
      const url = process.env.REACT_APP_API_URL + get_member_info;
      await axios
        .get(url, {
          headers,
          params: { brandId: brand_id, userId: user_id },
        })
        .then((response) => {
          if (response.data?.value?.code === 200) {
            return navigate("/home");
          }
          return;
        });
    };
  
    check_token();
  

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowModal(true);
        }, 2000);
        const timeOut = setTimeout(() => {
            document.getElementById('toLink').click();
        }, 3000);

        return () => clearTimeout(timeoutId,timeOut);
    }, []);

    return (
        <div  style={{overflow:'hidden'}}>
            <Link id="toLink" to="modal" spy={true} smooth={true} duration={500}></Link>
            <img src={Login} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
            {showModal && <IntroModal />}
        </div>
    );
};

export default Intro;
