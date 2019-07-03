import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import singleCurrency from './singleCurrency/singlecurrency'
import './App.scss';

import Spinner from './UI/spinner/spinner'
// import Currency from './currency/currency'
import Table from './table/table'

class App extends Component {
  // state = {    
  //   loading: true   
  // }
  
  render() {

    // let currencies
    // if (this.state.loading) {
    //   currencies = <Spinner />
    // } else {
    //   currencies = this.state.currencies.map(currency => {
    //       return (
    //         <Table/>
    //       )
    //   })
    // }

    return (
      <div className="App">
        <header><h1>CryptoTrack App</h1></header>
        <Switch>
        <Route path="/" exact component={Table}  />
        <Route path="/:id" exact component={singleCurrency}  />
        </Switch>
        
        {/* <Route path="/" exact render={()=>currencies}  /> */}
            
      </div>
    );
  }

}

export default App;



  // componentDidMount() {
  //   const config = {
  //     headers: {'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'}
  //   }
  //   axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
  //     .then(res => {
  //       const data = res.data;
  //       this.setState({ data: res.data });
  //     })
  // }