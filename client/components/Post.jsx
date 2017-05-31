import React, {PropTypes} from 'react'

const Post = (props) => (
  <div>
    <div><a href={`http://reddit.com/${props.permalink}`}>{props.title}</a></div>
    <div><img src={props.url} alt={props.title} width="50%" /></div>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
