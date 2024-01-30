import React from 'react';
import QRCode from "react-qr-code";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const image = {
  width: '103px',
  height: '103px',
  border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
  borderRadius: '100%',
}

const profile = {
  position: 'relative',
  left: '40%',
  top: '112px'
}

const des = {
  fontFamily: 'Satoshi-Black',
  textAlign: 'center',
  position: 'absolute',
  left: '-30px',
  color: 'black',
  fontSize: '16px',
  top: '110px'
}

const qr_back = {
  width: '254px',
  height: '254px',
  borderRadius: '20px',
  backgroundColor: 'white',
  position: 'absolute',
  left: '22%',
  top: '280px',
}

const qr = {
  width: '180px',
  height: '180px',
  top: '37px',
  position: 'absolute',
  left: '37px'
}

const qr_dec = {
  fontFamily: 'Satoshi-Black',
  textAlign: 'center',
  position: 'absolute',
  color: 'black',
  fontSize: '20px',
  top: '535px',
  left: '38%'
}

const btn_style = {
  backgroundColor: '#ffffff',
  padding: '14px 24px 14px 24px',
  border: '1px solid #F0F1F3',
  borderRadius: '8px',
  fontSize: '15px',
  position: 'absolute',
  top: '580px',
  width : '376px',
  height : '60px',
  left : '6%'
}

const icon_style = {
  float : 'left',
  marginTop : '5px',
}

const btn_des = {
  marginLeft : '10%',
  marginTop : '5px',
  float : 'left'
}

const arr_style = {
  width : '24px',
  height : '24px',
  marginLeft : '90%',
  marginTop : '5px'
}

const QR = () => {
  return (
    <div>
      <div style={profile}>
        <img style={image} src='logo192.png' />
        <div style={des}>
          Profile Name <br />
          profilename@profile.com
        </div>
      </div>
      <div style={qr_back}>
        <QRCode style={qr} value="test" />
      </div>
      <div style={qr_dec}>
        Scan my QR
      </div>
      <a href='/scanner' style={btn_style}>
        <svg style={icon_style} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24">
          <path d="M19,24H17a1,1,0,0,1,0-2h2a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5.006,5.006,0,0,1,19,24Z"/>
          <path d="M1,8A1,1,0,0,1,0,7V5A5.006,5.006,0,0,1,5,0H7A1,1,0,0,1,7,2H5A3,3,0,0,0,2,5V7A1,1,0,0,1,1,8Z"/>
          <path d="M7,24H5a5.006,5.006,0,0,1-5-5V17a1,1,0,0,1,2,0v2a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"/>
          <path d="M23,8a1,1,0,0,1-1-1V5a3,3,0,0,0-3-3H17a1,1,0,0,1,0-2h2a5.006,5.006,0,0,1,5,5V7A1,1,0,0,1,23,8Z"/>
        </svg>
        <div style={btn_des}>
          Scan QR Code
        </div>
        <svg style={arr_style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
      </a>
    </div>
  )
}

export default QR