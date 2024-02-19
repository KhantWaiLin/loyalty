import React from "react";
import PointIcon from "../../assets/icons/point_icon.svg";

const pointTotalContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  backgroundColor: '#384BCA',
  borderRadius: '10px',
}

const contentContainer = {
  display: 'flex',
  alignItems: 'center',
}

const pointIconStyle = {
  width: '25px',
  height: '25px',
  marginRight: '10px',
}

const pointValueStyle = {
  color: '#FFF',
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center',
}

const PointTotal = ({ point_data }) => {
  return (
    <div style={pointTotalContainer} className="point-total rounded-lg">
      <h3 className="text-[#FFF] text-[12px] font-semibold">
        Total Loyalty Points
      </h3>
      <div style={contentContainer}>
        <img src={PointIcon} style={pointIconStyle} alt="point-icon" />
        <span style={pointValueStyle}>{point_data?.point}</span>
      </div>
    </div>
  );
};

export default PointTotal;
