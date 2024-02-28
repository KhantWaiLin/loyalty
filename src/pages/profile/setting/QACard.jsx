import React from "react";

const buttonStyle = {
    background: '#ffa',
    textAlign: 'left',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '8px',
    marginBottom: '10px',
}

const HelpCenterCard = ({ faq_type_list, setType }) => {
    return (
        <div >
            <div className="personal-information-wrapper flex flex-col p-4 w-full overflow-scroll no-scrollbar">
                {faq_type_list ?
                    faq_type_list.map((item, index) => (
                        <div key={index} style={buttonStyle}>
                            <div style={{ marginBottom: '5px' }}>Q: {item?.question}</div>
                            <div>A: {item?.answer}</div>
                        </div>
                    ))
                    : null}
            </div>
        </div>
    );
};

export default HelpCenterCard;
