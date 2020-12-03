import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class UserHeader extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }
  render(){
    return(
      <div>User Header</div>
    );
  };
};
const mapStateToProps = (state) =>{
  return { users: state.users };
}
export default connect(mapStateToProps , {fetchUser: fetchUser})(UserHeader);