
const Post = ({title, body }) => {
    //const {title} = props;
  //const [a, b] = [1, 2, 3, 4];
  return (
    <div className="post-panel">
        <p className="post-title">{title}</p>
        <p className="post-body">{body}</p>
    </div>
  );
};

export default Post