import React from "react";
import PointIcon from "../../assets/icons/point_icon.svg";
import Crown from "../../assets/icons/crown.svg";
import Default from "../../assets/images/blog_default_img.png";
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
          <div style={contentContainer}>
            <img src={Crown} alt="crown-icon" style={crownIconStyle} />
            <span style={memberTypeStyle}>{user_info?.memberType}</span>
          </div>
        </div>
        <div style={imageSection}>
          <img src={Default} style={imageStyle} />
        </div>
      </div>

      <hr style={hrStyle} />
      <div style={cardFoot}>
        <div style={expireStyle}>
          Expire On: {user_info && formatDate(user_info?.expireDate)}
        </div>
        <a href="/profile/transaction-history" style={exploreStyle}>
          Explore More
          <svg style={iIcon} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.6999 4.9404L5.4049 2.6454C5.31122 2.55227 5.18449 2.5 5.0524 2.5C4.92031 2.5 4.79358 2.55227 4.6999 2.6454C4.65304 2.69188 4.61584 2.74718 4.59046 2.80811C4.56507 2.86904 4.552 2.93439 4.552 3.0004C4.552 3.0664 4.56507 3.13176 4.59046 3.19268C4.61584 3.25361 4.65304 3.30891 4.6999 3.3554L6.9999 5.6454C7.04677 5.69188 7.08396 5.74718 7.10935 5.80811C7.13473 5.86904 7.1478 5.93439 7.1478 6.0004C7.1478 6.0664 7.13473 6.13176 7.10935 6.19269C7.08396 6.25361 7.04677 6.30892 6.9999 6.3554L4.6999 8.6454C4.60575 8.73889 4.55259 8.86595 4.55212 8.99863C4.55165 9.13131 4.60391 9.25875 4.6974 9.3529C4.79089 9.44705 4.91795 9.50021 5.05063 9.50068C5.18332 9.50114 5.31075 9.44889 5.4049 9.3554L7.6999 7.0604C7.9808 6.77915 8.13858 6.3979 8.13858 6.0004C8.13858 5.6029 7.9808 5.22165 7.6999 4.9404Z" fill="#F5F6FD" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PointTotal;
