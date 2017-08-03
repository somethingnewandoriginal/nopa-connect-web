import React from 'react';
import { Layout, Button } from '../../components';
import * as Paths from '../../constants/paths';
import { connect } from 'react-redux';
import { selectBank } from '../../redux/actions/bank-actions';

const bankList = [{
  name: 'Barclays',
  logo: require('../../../static/images/Barclays.png')
},
  {
    name: 'Natwest',
    logo: require('../../../static/images/LogoNatwest.png')
  },
  {
    name: 'Lloyds',
    logo: require('../../../static/images/LogoLloyds.png')
  },
  {
    name: 'HSBC',
    logo: require('../../../static/images/LogoHSBC.png')
  },
  {
    name: 'TSB',
    logo: require('../../../static/images/LogoTSB.png')
  },
  {
    name: 'Santander',
    logo: require('../../../static/images/LogoSantander.png')
  }
];

class ChooseBankPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Layout title='Choose bank'>
      <div className="main-content">
      <h1>Which bank does this account belong to?</h1>
      <p className="zopa-hide-on-small">Track all of your payments by connecting as many bank accounts as you'd like to your Nopa<br />
      account and get updates on your balance instantly.</p>
      <p className="zopa-hide-on-med-and-up">Choose your bank</p>

      <div className="bank-list">
      {
        bankList.map(bank => {
          return(
            <div key={bank.name} onClick={()=>{this.props.selectBank(bank.name);}}>
            <img
            className={bank.name === this.props.bank ? 'selected' : null}
            alt={bank.name} src={bank.logo}/>
            </div>
          );
        })
      }
      </div>

      <Button to={Paths.LOGIN_BANK} className="button">Continue</Button>

      </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bank : state.bankReducer.bank
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectBank : (bank) => {
      dispatch(selectBank(bank))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBankPage);
