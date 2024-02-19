import React from "react";
import DefaultImage from "../../assets/images/profile_img.svg"

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '98%',
    height: 'auto',
};

const imageSectionStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    width: '98%',
    gap: '8px',
    paddingLeft: '5px'
};

const imageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '16px',
    objectFit: 'cover',
};

const textSectionStyle = {
    flex: '1',
    backgroundColor: '#FAFAFA',
    border: '1px solid #F0F1F3',
    borderRadius: '20px',
    paddingLeft: '10px',
    paddingBottom: '20px',
    paddingTop: '5px',
    paddingRight: '2px',
    width: '90%',
    wordWrap: 'break-word',
};

const gapStyle = {
    height: '2px',
};

function CommentCard({ comment }) {
    return (
        <div style={cardStyle}>
            <div href='#' style={imageSectionStyle}>
                <img
                    style={imageStyle}
                    // src={comment?.customerImage}
                    src={DefaultImage}
                    alt="Card Image"
                />
                <div style={textSectionStyle}>
                    <p className="text-sm font-normal mt-[8px] not-italic text-[#989FAD]">
                        {comment?.comment}
                    </p>
                </div>
            </div>
            <div style={gapStyle}></div>
        </div>
    );
}

export default CommentCard;
