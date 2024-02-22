import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Phone from "../../assets/icons/phon.svg";
import Reset from "../../assets/icons/reset.svg";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import Loader from "../../components/loader/Loader";

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
  top: '15%',
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

const opt_des = {
    position: 'absolute',
    top: '15%',
}

const otpInputStyle = {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottom: '1px solid #000',
    opacity: '0.5'
};

const activeInputStyle = {
    borderBottomColor: 'blue',
};

const countStyle = {
    position: 'absolute',
    top: '25%',
    left: '50%'
}

const inputContainerStyle2 = {
    width: '90%',
    position: 'absolute',
    top: '20%',
    left: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const inputIconStyle = {
  position: 'absolute',
  top: '70%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
};

const text = {
    position: 'absolute',
    top: '25%',
    opacity: '0.5',
    fontSize: '10px'
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

const resetStyle = {
    textAlign: 'center',
    marginTop: '5px'
}

const imageStyle = {
    margin: '50% auto',
    marginBottom: '20px',
    width: '10%',
    height: '10%',
    display: 'block',
}

const ForgotPassword = () => {
    const [number, setNumber] = useState("");
    const [activeTab, setActiveTab] = useState("tab 1");
    const [activeInputIndex, setActiveInputIndex] = useState(null);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [otpStr, setOtpStr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const { send_otp, forget_password } = api_routes;
    const [newPassword, setNewPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setNumber(e.target.value);
    };

    const handleOptInput = (e, index) => {
        const value = e.target.value;
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < otp.length - 1 && value !== "") {
                document.getElementById(`otp-input-${index + 1}`).focus();    
                setActiveInputIndex((index+1));            
            } else if (index > 0 && value === "") {
                document.getElementById(`otp-input-${index + -1}`).focus();
                setActiveInputIndex((index-1)); 
            }
        }
    };

    const send_otp_fun = async () => {
        setIsLoading(true);
        const data = {
            isForget: true,
            Phone: number,
            userType: 2,
        };
        await api.postOtp(send_otp, data).then((response) => {
            if (response?.data?.code === 200) {
                setCountdown(60);
                setActiveTab("tab 2");
            }
            setIsLoading(false);
        });
    };

    const register = async () => {
        try {
            setIsLoading(true);
    
            const formatedData = {
                otp: otpStr,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
                phoneNo: number
            };
    
            const token = "r5RrLgGn6vpdE9W2Oqv5XFiZrYh5rzN5BgGAxQY33oYuNTM56OuncOqiLYbkDeXrZ43YGYJWfmbTHil0MVdkamsTuMZj4tty8C7pPQ14mdlsfgPVhyl19fqierBVPUcO";
    
            const response = await axios.post(
                process.env.REACT_APP_API_URL + forget_password,
                formatedData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token,
                    },
                }
            );
            //console.log(response.data.statusCode);
    
            if (response?.data?.statusCode === 200) {
                //const strigify_data = JSON.stringify(response?.data?.value?.data);
                //localStorage.setItem("authenticate_data", strigify_data);
                setActiveTab("tab 4");
            } else {
                console.log("Registration Failed.");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const nextTab = () => {
        setActiveTab("tab 3");
        setOtpStr(otp.join(''));
    }
    
    useEffect(() => {
        let timer;

        if (activeTab === "tab 2" && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [activeTab, countdown]);

    if (isLoading) {
        return (
            <div className="w-full h-full items-center flex flex-col justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div>
            {activeTab === "tab 1" && (
                <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                    <a style={iconStyle} href="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                    <div style={headingStyle}>Get Started</div>
                    <div style={inputContainerStyle}>
                        <div style={{ fontSize: '14px' }}>Phone Number</div>
                        <input type="text" placeholder="Enter Phone Number" style={inputBoxStyle} name="phoneNo" value={number} onChange={handleInputChange} />
                        <span style={inputIconStyle}><img src={Phone} /></span>
                    </div>
                    <p style={text}>No worries, We'll send you reset you instruction.</p>
                    <button style={buttonStyle} onClick={send_otp_fun}>Next</button>
                </div>
            )

            }
            {activeTab === "tab 2" && (
                <>
                    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                        <button style={iconStyle} onClick={()=>setActiveTab("tab 1")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <div style={headingStyle}>Verification</div>
                        <p style={opt_des}>
              Enter the 6-digit codes sent to {number}
            </p>
                        <div style={inputContainerStyle2}>
                            {otp.map((digit, index) => (
                                <input
                                    type="text"
                                    id={`otp-input-${index}`}
                                    key={index}
                                    value={digit}
                                    onChange={(e) => handleOptInput(e, index)}
                                    maxLength="1"
                                    style={{ ...otpInputStyle, ...(activeInputIndex === index ? activeInputStyle : {}) }}
                                // className="w-[50px] text-center flex justify-center h-[50px] shadow-lg focus:outline-none border-gray border-[1px] rounded-lg"
                                />
                            ))}
                            </div>
                            <div style={countStyle} className="countdown-timer flex justify-end mt-4 text-[#48505E]">
                                {countdown > 0 ? (
                                    <p className="text-[14px] font-normal">{`Request new code in ${countdown}s`}</p>
                                ) : (
                                    <button
                                        className="resend-btn text-white ml-10 font-medium rounded-lg px-4 py-2 bg-blue-500"
                                        type="button"
                                        onClick={send_otp_fun}
                                    >
                                        Resend OTP
                                    </button>
                                )}
                        </div>
                        <button style={buttonStyle} onClick={nextTab}>Confirm</button>
                    </div>

                </>
            )}
            {activeTab === "tab 3" && (
                <>
                    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                        <button style={iconStyle} onClick={()=>setActiveTab("tab 1")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <div style={headingStyle}>New Password</div>
                        <div style={inputContainerStyle}>
                            <div style={{ fontSize: '14px' }}>New Password</div>
                            <input type="text" style={inputBoxStyle} name="new" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                            {/* <span style={inputIconStyle}><img src={Phone} /></span> */}
                            <div style={{ fontSize: '14px' }}>Confirm Password</div>
                            <input type="text" style={inputBoxStyle} name="confirm" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                            {/* <span style={inputIconStyle}><img src={Phone} /></span> */}
                        </div>
                        <button style={buttonStyle} onClick={register}>Reset Password</button>
                    </div>

                </>
            )}
            {activeTab === "tab 4" && (
                <>
                    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                        <a style={iconStyle} href="/login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </a>
                        <div style={headingStyle}>Password Reset</div>
                        <img src={Reset} style={imageStyle}/>
                        <div style={resetStyle}>
                            "Your password has been reset. Please Log in again"
                        </div>
                        <button style={buttonStyle} onClick={()=> navigate('/login')}>Login</button>
                    </div>

                </>
            )}
        </div>
    )

};

export default ForgotPassword;
