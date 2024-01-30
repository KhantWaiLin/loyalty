import React from "react";
import { useParams } from "react-router-dom";

const heading = {
    position: 'relative',
    left: '188px',
    top: '35px'
}

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
    top: '100px',
}

const date_style = {
    position: 'absolute',
    left: '15px',
    top: '120px',
    fontSize: '10px'
}

const image = {
    position: 'absolute',
    top: '150px',
    left: '15px',
    width: '390px',
    height: '175px',
    border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
    borderRadius: '5px',
}

const like_and_comment = {
    position: 'absolute',
    top: '600px',
    left: '15px',
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

const BlogDetail = () => {

    const {id} = useParams();
    const [likes, setLikes] = React.useState(0);
    const [comments, setComments] = React.useState([]);
    const [newComment, setNewComment] = React.useState('');

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className="text-black-500 text-lg">
            <a style={icon_style} href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </a>
            <h1 style={heading}>Blog Detail{id}</h1>
            <div style={title_style}>Title</div>
            <div style={date_style}>September 7, 2024</div>
            <img style={image} src='abc.png' />
            <div style={blog_content}>
                LoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumrem
            </div>
            <div style={like_and_comment}>
                <button onClick={handleLike}>
                    Like {likes} {likes !== 1 ? 'Likes' : 'Like'}
                </button>

                <div>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    /><br />
                    <button onClick={handleAddComment}>Comment</button>
                </div>

                {/* <div>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div> */}
            </div>
        </div>
    );
};

export default BlogDetail;
