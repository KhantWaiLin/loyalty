import axios from "axios";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Phone from "../../assets/icons/phon.svg";
import View from "../../assets/icons/view.svg";

import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import { api_routes } from "../../utils/apiRoute";
import api from "../../api/api";

const iconStyle = {
  position: 'absolute',
  left: '15px',
  top: '52px',
  backgroundColor: '#FAFAFA',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '5px'
}

const inputContainerStyle = {
  width: '90%',
  position: 'absolute',
  top: '20%',
  left: '5%'
};

const headingStyle = {
  position: 'absolute',
  left: '50%',
  top: '60px',
  transform: 'translateX(-50%)',
  fontSize: '16px',
}

const inputBoxStyle = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #48505E',
  padding: '8px',
  fontSize: '14px',
  margin: '8px 0',
  outline: 'none',
};

const inputIconStyle = {
  position: 'absolute',
  top: '25%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
};

const passwordVisible = {
  position: 'absolute',
  top: '80%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
};

const forgotStyle = {
  position: 'absolute',
  top: '42%',
  left: '65%',
  fontSize: '14px',
  color: 'blue',
  textDecoration: 'underline',
}

const buttonStyle = {
  width: '90%',
  padding: '10px',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  position: 'absolute',
  top: '90%',
  left: '5%'
};

const checkbox = {
  marginTop: "95%",
  position: 'relative',
  top: '0.2rem',
  fontSize: '1rem',
};

const checkbox_label = {
  position: 'relative',
  top: '0.2rem',
  fontSize: '1rem',
  marginLeft: '1rem',
};


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userName: "",
    password: "",
    userType: 2,
  });
  const { get_member_info } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();
  const api_url =
    process.env.REACT_APP_API_URL + "/api/Authentication/Authenticate";
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

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

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post(api_url, form).then((response) => {
      if (response?.data?.code === 200) {
        const strigify_data = JSON.stringify(response?.data?.data);
        localStorage.setItem("authenticate_data", strigify_data);
        if (rememberMe) {
          Cookies.set('remembered_user', form.userName, { expires: 365 });
          Cookies.set('remembered_password', form.password, { expires: 365 });
        } else {
          Cookies.remove('remembered_user');
          Cookies.remove('remembered_password');
        }
        navigate("/home");
      } else {
        console.log("Login Failed.");
      }
    });
  };

  const passwordView = () => {
    let viewToggle = document.getElementById('password');
    if (viewToggle.type == "password") {
      viewToggle.type = "text"
    } else {
      viewToggle.type = "password"
    }
  }

  useEffect(() => {
    const storedUser = Cookies.get('remembered_user');
    const storedPassword = Cookies.get('remembered_password');

    if (storedUser && storedPassword) {
      setForm((prev) => ({
        ...prev,
        userName: storedUser,
        password: storedPassword,
      }));
      setRememberMe(true);
    }
  }, []);


  return (
    <div>
      <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
        <a style={iconStyle} href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <div style={headingStyle}>Get Started</div>
        <form onSubmit={onSubmit}>
          <div style={inputContainerStyle}>
            <div style={{ fontSize: '14px' }}>Phone Number</div>
            <input type="text" style={inputBoxStyle} name="userName" value={form.userName} onChange={onChange} />
            <span style={inputIconStyle}><img src={Phone} /></span>
            <br />
            <div style={{ fontSize: '14px' }}>Password</div>
            <input type="password" id="password" placeholder="Enter Password" style={inputBoxStyle} name="password" value={form.password} onChange={onChange} />
            <span style={passwordVisible} onClick={passwordView}>
              <img src={View} />
            </span>
          </div>
          <input
            style={checkbox}
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="rememberMe" style={checkbox_label}>Remember Me</label>
          <a href="/forgotpassword" style={forgotStyle}>Forgot Password?</a>
          <button type="submit" style={buttonStyle} onClick={onSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
