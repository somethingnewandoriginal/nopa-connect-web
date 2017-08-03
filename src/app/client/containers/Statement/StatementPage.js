import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { fetchTransactions } from '../../redux/actions/bank-actions';

import { Layout, Button } from '../../components';

class StatementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    if(this.props.loggedIn) {
      this.props.fetchTransactions();
    } else {
      browserHistory.push('/login');
    }
  }

  getitems() {
    let items =[];
    this.props.dates.map((date)=>{
      items.push(<li className="date-item small" key={date}>{date === 'Now' ? 'Today' : date}</li>);
      this.props.transactions.map((transaction)=>{
        if(date === transaction.dateStr){
          items.push(
            <li className="transaction" key={transaction.id}>
              <div>{transaction.beneficary}</div>
              <div>{transaction.value}</div>
            </li>
          );
        }
      });
    });
    return(items);
  }

  render(){
    return (
      <Layout title='Transactions'>
        <div className="main-content">
          <div className='account-details'>
            <div className='first-col'>
              <div>
              {this.props.bank}
              </div>
              <div>
              {this.props.customerDetails.surname}
              </div>
            </div>
            <div  className='second-col'>
              <h4>Current account</h4>
              <div>
                {this.props.customerDetails.accountNumber}
              </div>
              <div>
                {this.props.customerDetails.sortCode}
              </div>
            </div>
          </div>
          <p>Your transactions for the last 30 days</p>
          <ul className='transactions'>
            {this.getitems()}
          </ul>
          <Button className="button" onClick={()=>{console.log('Load more transactions clicked...');}}>Show more</Button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bank : state.bankReducer.bank,
    transactions : state.bankReducer.transactions,
    dates : state.bankReducer.dates,
    customerDetails : state.loginReducer.loginForm,
    loggedIn : state.loginReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTransactions : () => {
      return fetchTransactions(dispatch)();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementPage);
