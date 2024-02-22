import React, { useState, useEffect } from "react";
import Login from "../../assets/images/Login.svg";
import IntroModal from "./IntroModal";
import { Link } from 'react-scroll';

const Intro = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowModal(true);
        }, 3000);
        const timeOut = setTimeout(() => {
            document.getElementById('toLink').click();
        }, 4000);

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
