import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { Layout, LoginForm } from '../../components';
import { updateLoginForm, validateLoginForm, logIn } from '../../redux/actions/login-actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      formSubmitted : false
    };
  }

  render(){
    return (
      <Layout title='Log in'>
      <div className="main-content">
      <h1>Log in to your online banking?</h1>
      <p>Enter the same details you use to login to your online banking</p>

      <LoginForm
      handleChange={(e) => {this.props.updateLoginForm(e.target.name, e.target.value); if(this.state.formSubmitted){this.props.validateLoginForm()}}}
      handleSubmit={(e) => {
        e.preventDefault();
        this.setState({
          formSubmitted : true
        });
        this.props.validateLoginForm()
        if(Object.keys(this.props.errors).length === 0 && this.props.errors.constructor === Object && formIsValid(this.props.formValues)){
          console.log('Form valid, submitting...');
          this.props.logIn();
          browserHistory.push('/statement')
        } else {
          console.log('Errors with form');
        }
      }}
      errors={this.props.errors} />
      </div>
      </Layout>
    );
  }
}

const formIsValid = (form) => {
  if( form.surname        !== '' &&
      form.sortCode       !== '' &&
      form.accountNumber  !== '' &&
      form.passCode       !== '' &&
      form.memorableWord  !== ''){
    return true;
  } else {
    return false;
  }
}

const mapStateToProps = (state) => {
  return {
    formValues : state.loginReducer.loginForm,
    errors     : state.loginReducer.loginForm.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginForm : (field,value) => {
      dispatch(updateLoginForm(field,value))
    },
    validateLoginForm : () => {
      dispatch(validateLoginForm())
    },
    logIn : () => {
      dispatch(logIn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
