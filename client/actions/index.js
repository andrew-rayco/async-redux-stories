import request from 'superagent'

export const receivePosts = (posts) => {
  console.log("creating post action", posts);
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log("got posts from api, dispatching to reducer now");
        dispatch(receivePosts(res.body))
        // dispathc({type: 'RECIEVE_POSTS', posts: res.body})
      })
  }
}
