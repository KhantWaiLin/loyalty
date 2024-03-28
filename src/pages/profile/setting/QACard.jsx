import React from "react";

const buttonStyle = {
    background: 'linear-gradient(213deg, #384bca 19.49%, #7b8cff 194.01%)',
    color: '#fff',
    opacity: '0.7',
    textAlign: 'left',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '8px',
    marginBottom: '10px',
}

const HelpCenterCard = ({ faq_type_list, setType }) => {
    return (
        <div>
            <div className="personal-information-wrapper flex flex-col p-4 w-full overflow-scroll no-scrollbar">
                {faq_type_list ?
                    faq_type_list.map((item, index) => (
                        <div key={index} style={buttonStyle}>
                            <div style={{ marginBottom: '5px' }}>Q: {item?.question}</div>
                            <div dangerouslySetInnerHTML={{ __html: `Ans: ${item.answer}` }}></div>
                        </div>
                    ))
                    : null}
            </div>
        </div>
    );
};

export default HelpCenterCard;
