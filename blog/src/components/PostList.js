import React from 'react'
import { fetchPostsAndUsers } from '../actions'
import { connect } from 'react-redux'
import UserHeader from './UserHeader';
// import UserHeader from './UserHeader'

class PostList extends React.Component {
  //on mounting of the component
  componentDidMount () {
    this.props.fetchPostsAndUsers();
  }
  
  //helper method for render
  renderList () {
    if (this.props.posts !== undefined) {
      //console.log(this.props.posts.data);
      
      return this.props.posts.map((post) => {
        return (
          <div className='item' key={post.id}>
            <i className=' huge big circle outline icon blue user icon' />
            <div className='content'>
              <div className='description'>
                <h2>{post.title}</h2>
                <p>
                  {post.body}
                </p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
        )
      })
    }
  }

  render () {
    return (
      <div className='ui relaxed divided list'>
        {this.renderList()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, { fetchPostsAndUsers})(PostList)
