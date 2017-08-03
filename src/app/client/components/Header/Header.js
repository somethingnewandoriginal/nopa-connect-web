import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router'

import Button from '../Button/Button';
import * as Paths from '../../constants/paths';
import { logOut } from '../../redux/actions/login-actions';

export class Header extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.loggedIn){
      this.props.logOut();
    }
    browserHistory.push('/login');
  }

  render(){
    return (
      <div className="header">
      <div className="logo">
        <Link to='/'>
          <img className="Nopa" alt="Logo" src={require('../../../static/images/Logo_Nopa.svg')} />
        </Link>
      </div>
      <div className="signin">
      <Button onClick={this.handleClick}>{this.props.loggedIn ? 'Log Out' : 'Log In'}</Button>
      </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn : state.loginReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut : () => {
      dispatch(logOut())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
