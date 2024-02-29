import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import HelpCenterCard from "./HelpCenterCard";
import QACard from "./QACard";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import Loader from "../../../components/loader/Loader";

const iconStyle = {
    position: 'absolute',
    left: '15px',
    top: '52px',
    backgroundColor: '#FAFAFA',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '5px'
}

const headingStyle = {
    position: 'absolute',
    left: '50%',
    top: '60px',
    transform: 'translateX(-50%)',
    fontSize: '16px',
}

const buttonStyle1 = {
    background: 'blue',
    color: '#fff',
    textAlign: 'left',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '8px',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: '0.7'
}


const HelpCenter = () => {
    const { t, changeLanguage } = useContext(LanguageContext);
    const [isLoading, setIsLoading] = useState(false);
    const [faqTypeList, setfaqTypeList] = useState(null);
    const [faqListByType, setfaqListByType] = useState(null);
    const [activeTab, setActiveTab] = useState("tab 1");

    const { faq_type_list, faq_list_byType } = api_routes;
    const { brand_id } = getUserBrandMemberId();

    const get_faq_type_list = async () => {
        setIsLoading(true);
        await api
            .get(faq_type_list, { brandId: brand_id })
            .then((response) => {
                setfaqTypeList(response?.data?.value?.data);
            });
        setIsLoading(false);
    };

    const setType = async (type) => {
        try {
            const response = await api.postByBody(faq_list_byType, { brandId: brand_id, keyword: "", type: type });
            //console.log(response.data.value.data);
            setfaqListByType(response?.data?.value?.data);
            setActiveTab("tab 3");
        } catch (error) {
            console.error("Error fetching blog data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        get_faq_type_list();
        changeLanguage(localStorage.getItem("language"));
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-full items-center flex flex-col justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div>
            {activeTab === "tab 2" && (
                <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                    <a style={iconStyle} onClick={() => setActiveTab("tab 1")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                    <div style={headingStyle}>FAQ</div>
                    <HelpCenterCard faq_type_list={faqTypeList} setType={setType} />
                </div>
            )}
            {activeTab === "tab 3" && (
                <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                    <a style={iconStyle} onClick={() => setActiveTab("tab 2")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </a>
                    <div style={headingStyle}>FAQ</div>
                    <div style={{ marginTop: '20%', height: '85vh', overflow: 'auto' }} className="no-scrollbar">
                        <QACard faq_type_list={faqListByType} />
                    </div>
                </div>
            )}

            {activeTab === "tab 1" && (
                <>
                    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                        <a style={iconStyle} href="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </a>
                        <div style={headingStyle}>{t('help')}</div>
                        <div style={{marginTop: '20%'}}>
                            <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                            <button style={buttonStyle1} onClick={() => setActiveTab("tab 4")}>
                                <div>
                                    Contact Us
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                            <button style={buttonStyle1} onClick={() => setActiveTab("tab 2")}>
                                <div>
                                    FAQ
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === "tab 4" && (
                <>
                    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                        <a style={iconStyle} onClick={() => setActiveTab('tab 1')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </a>
                        <div style={headingStyle}>Help Center</div>
                        <div style={{marginTop: '20%'}}>
                            <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                                Contact: 09*******<br/>
                                Email: *****.com
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default HelpCenter;
