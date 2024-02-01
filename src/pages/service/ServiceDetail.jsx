import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";

const icon_style = {
    position: 'absolute',
    left: '15px',
    top: '35px',
    backgroundColor: '#6DF3FF',
    padding: '2px',
    border: '1px',
    borderRadius: '5px'
}

const title_style = {
    position: 'absolute',
    left: '15px',
    top: '295px',
}

const date_style = {
    position: 'absolute',
    left: '300px',
    top: '295px',
}

const button = {
    position: 'absolute',
    left: '15px',
    top: '260px',
    fontSize: '10px',
    backgroundColor: '#6DF3FF',
    padding: '2px',
    border: '1px',
    borderRadius: '5px'
}

const button1 = {
    position: 'absolute',
    left: '120px',
    top: '260px',
    fontSize: '10px',
    backgroundColor: '#6DF3FF',
    padding: '2px',
    border: '1px',
    borderRadius: '5px'
}

const button2 = {
    position: 'absolute',
    left: '230px',
    top: '260px',
    fontSize: '10px',
    backgroundColor: '#6DF3FF',
    padding: '2px',
    border: '1px',
    borderRadius: '5px'
}

const button3 = {
    position: 'absolute',
    left: '350px',
    top: '260px',
    fontSize: '10px',
    backgroundColor: '#6DF3FF',
    padding: '2px',
    border: '1px',
    borderRadius: '5px'
}

const image = {
    position: 'absolute',
    top: '80px',
    left: '15px',
    width: '390px',
    height: '175px',
    border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
    borderRadius: '5px',
}

const blog_content = {
    position: 'absolute',
    top: '330px',
    left: '15px',
    textIndent: '50px',
    textAlign: 'justify',
    width: '390px',
    height: '270px',
    border: '1px solid #ccc',
    overflow: 'auto',
}

const ServiceDetail = () => {

    const { id } = useParams();
    const [serviceDetail, setServiceDetail] = React.useState([]);

    const { service_detail } = api_routes;
    const [isLoading, setIsLoading] = useState(false);

    const [preData, setPreData] = React.useState({
        "keyword": "",
        "rowLimit": 10,
        "currentPage": 1,
        "sortBy": "",
        "isDesc": true,
        "categoryId": id,
        'subCategoryId': []
    });

    const serviceData = async () => {
        setIsLoading(true);
        await api
            .postByBody(service_detail, preData)
            .then((response) => {
                setServiceDetail(response.data.value.data.data[0][0]);
            });
        setIsLoading(false);
    };

    useEffect(() => {
        serviceData();
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
            <a style={icon_style} href="/servicelist">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </a>
            <img style={image} src='abc.png' />
            <button style={button}>Something</button>
            <button style={button1}>Something</button>
            <button style={button2}>Something</button>
            <button style={button3}>Something</button>
            <div style={title_style}>{serviceDetail.subCategoryName}</div>
            <div style={date_style}>Price</div>
            <div style={blog_content}>
                LoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumrem
            </div>
        </div>
    );
};

export default ServiceDetail;
