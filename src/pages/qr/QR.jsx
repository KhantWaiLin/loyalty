import {React, useState, useEffect} from 'react';
import QRCode from "react-qr-code";
import PointTotal from "./PointTotal";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import Loader from "../../components/loader/Loader";

const heading = {
  marginTop: '52px',
  fontSize: '16px',
  textAlign: 'center',
  fontFamily: "'Poppins', sans-serif",
  color: "#48505E"
}

const point = {
  marginTop: '40px',
  textAlign: 'center',
  width: '90%',
  marginLeft: '5%'
}

const qr = {
  position: 'absolute',
  marginTop: '20px',
  width: '162px',
  height: '162px',
  marginLeft: '20px',
}

const qrBack = {
  width: '200px',
  height: '200px',
  marginTop: '30px',
  marginLeft: '28%',
  borderRadius: '20px',
  background: 'var(--Default-White, #FFF)',
  boxShadow: '0px 1.316px 3.947px 0px rgba(64, 83, 209, 0.10), 0px 17.105px 10.526px 0px rgba(64, 83, 209, 0.05), 0px 31.579px 13.158px 0px rgba(64, 83, 209, 0.01), 0px 48.684px 13.158px 0px rgba(64, 83, 209, 0.00)',
};

const qr_des = {
  marginTop : '10px',
  marginLeft: '43%',
  fontSize : '14px',
  opacity: '0.5'
}

const name = {
  // marginTop : '30px',
  textAlign : 'center',
  fontSize : '20px',
}

const email = {
  marginTop : '10px',
  textAlign : 'center',
  fontSize : '14px',
}

const infoStyle = {
  background: '#F8F8FF',
  padding: '5px',
  borderRadius: '10px',
  width: '80%',
  textAlign: 'center',
  marginLeft: '10%'
}

const QR = () => {
  const [pointData, setPointData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const { brand_id, user_id } = getUserBrandMemberId();

  const [qrCode, setQrCode] = useState({
    brand_id : brand_id,
    member_id: user_id
  });
  const { get_member_info } = api_routes;

  const get_reward_list = async () => {
    setIsLoading(true);
    await api
      .get(get_member_info, { brandId: brand_id, userId: user_id })
      .then((response) => {
        setPointData(response?.data?.value?.data);
        setUserInfo(response?.data?.value?.data);
        setQrCode(JSON.stringify(qrCode));
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_reward_list();
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
      <h1 style={heading}>QR</h1>
      <div>
        <PointTotal point_data={pointData} user_info={userInfo}/>
      </div>
      <div style={qrBack}>
        <QRCode style={qr} value={qrCode} fgColor="#384BCA"/>
      </div>
      <div style={qr_des}>Scan my QR</div>
      <div style={infoStyle}>
        <div style={name}>{userInfo?.name}</div>
        <div style={email}>{userInfo?.email}</div>
      </div>
    </div>
  )
}

export default QR