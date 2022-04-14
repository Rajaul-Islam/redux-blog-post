import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large  middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
// const PostList = (props) => {
//   const uri = props.fetchPost();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(uri)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   },[]);
//   // console.log(data);
//   return <div>postList</div>;
// };

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPost })(PostList);
