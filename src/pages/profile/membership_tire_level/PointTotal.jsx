import React from "react";
import PointIcon from "../../../assets/icons/point_icon.svg";
import Crown from "../../../assets/icons/crown.svg";
import Default from "../../../assets/images/blog_default_img.png";
import { format, parse } from 'date-fns';

const pointTotalContainer = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  backgroundColor: '#384BCA',
  borderRadius: '10px',
  marginTop: '10%',
  marginLeft: '5%',
  marginRight: '5%'
}

const contentContainer = {
  display: 'flex',
}

const cardFoot = {
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '10px',
}

const pointIconStyle = {
  marginTop: '4px',
  width: '25px',
  height: '25px',
  marginRight: '10px',
}

const crownIconStyle = {
  marginRight: '12px',
  marginLeft: '5px',
}

const pointValueStyle = {
  color: '#FFF',
  fontSize: '24px',
  fontWeight: 'bold',
}

const memberTypeStyle = {
  color: '#FFF',
  fontSize: '13px',
}

const hrStyle = {
  marginTop: '10px'
}

const expireStyle = {
  color: '#FFF',
  fontSize: '13px',
  marginTop: '10px'
}

const exploreStyle = {
  display: 'flex',
  color: '#FFF',
  fontSize: '13px',
  marginTop: '10px',
}

const iIcon = {
  marginTop: '7px',
  marginLeft: '6px'
}

const imageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '16px',
  objectFit: 'cover',
  clear: 'left'
}

const imageSection = {
  paddingBottom: '10px'
}

const PointTotal = ({ point_data, user_info }) => {
  const formatDate = (date) => {
    const formattedDate = parse(date, 'MM/yyyy', new Date());
    return format(formattedDate, 'd.MM.yyyy');
  }
  return (
    <div style={pointTotalContainer} className="point-total rounded-lg">
      <div style={cardFoot}>
        <div>
          <h3 className="text-[#FFF] text-[14px] font-semibold">
            Total Loyalty Points
          </h3>
          <div style={contentContainer}>
            <img src={PointIcon} style={pointIconStyle} alt="point-icon" />
            <span style={pointValueStyle}>{point_data?.point}</span>
          </div>
        </div>
        <div style={imageSection}>
          <img src={user_info? user_info.image : Default} style={imageStyle} />
        </div>
      </div>

    </div>
  );
};

export default PointTotal;
