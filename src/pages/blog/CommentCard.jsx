import React from "react";

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '100%',
    height: 'auto',
};

const imageSectionStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
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
    padding: '10px',
    paddingTop: '5px',
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
                    src={comment?.customerImage}
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
