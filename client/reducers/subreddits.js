function subreddits (state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'RECEIVE_POSTS':
    console.log("recieving posts in reducer!", action.posts);
      return [
        ...action.posts
      ]

    default:
      return state
  }
}

export default subreddits
