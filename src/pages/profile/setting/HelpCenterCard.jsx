import React from "react";
import PropTypes from 'prop-types';

const buttonStyle = {
    background: 'linear-gradient(213deg, #384bca 19.49%, #7b8cff 194.01%)',
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

const HelpCenterCard = ({faq_type_list, setType}) => {
    let i = 0;
    HelpCenterCard.propTypes = {
        faq_type_list: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string
      }),
    };
    return (
        <div style={{marginTop: '20%'}}>
            <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
                {faq_type_list? 
                    faq_type_list.map((item) => (
                        <button key={i++} style={buttonStyle} onClick={() => setType(item.type)}>
                            {item.name}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    ))
                    : null}
            </div>
        </div>
    );
};

export default HelpCenterCard;
