import React, { Component } from 'react';
import './table.scss';
import Spinner from '../UI/spinner/spinner'
import Currency from '../currency/currency'

import axios from 'axios';

class Table extends Component {
  state = {
    loading: true,
    currencies: [],
    ownedCurrency: '',
    myCurrencies: [
      { id: "bitcoin", coinValue: 4 },
      { id: "ethereum", coinValue: 3 }
    ]
  }
  interval = null;

  componentDidMount() {

    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=50')
      .then(res => {
        const data = res.data;
        this.setState({
          currencies: data,
          loading: false
        });
      })
   
  }

  render() {

    const handleChange = (e)  => {
      e.preventDefault();
      localStorage.setItem(e.target.id, e.target.value);
      
    }

    const handleAddCurrency = (id, value) => {
    //  set logic for
    }



    let currencies
    if (this.state.loading) {
      currencies = <Spinner />
    } else {
      currencies = this.state.currencies.map(currency => {

        const myCurrenciesFind = this.state.myCurrencies.filter(el => {
          return el.id === currency.id;
        })
        let calc = null

        if (myCurrenciesFind[0]) {
          let currenCurrency = myCurrenciesFind[0]['coinValue']
          console.log(currenCurrency)
          calc = Math.round(currency.price_usd * currenCurrency * 100) / 100
        } else {
          calc = 0
        }
        let calcy = null
        if (myCurrenciesFind[0]) {
          let amountOwned = myCurrenciesFind[0]['coinValue']
          calcy = amountOwned
        } else {
          calcy = ''
        }

        return (
          <Currency
            key={currency.id}
            id={currency.id}
            name={currency.name}
            curValue={currency.price_usd}
            valueChange={currency.percent_change_24h}
            symbol={currency.symbol}
            ownedCurrency={this.state.ownedCurrency}
            handleChange={handleChange}
            handleAddCurrency={this.state.handleAddCurrency}
            calc={calc}
            amountOwned={calcy}
          />
        )
      })
    }
    return (
      <table className="bitcoin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Short Name</th>
            <th>$ Value</th>
            <th >last 24h</th>
            <th>Amout you own</th>
            <th>$ value of your coin</th>
          </tr>

        </thead>
        <tbody>
          {currencies}
        </tbody>
      </table>
    );
  }
}


export default Table;

















// const table = (props) => {

//     const currencies = props.currencies.map(currency => {
//         const myCurrenciesFind = props.myCurrencies.filter(el => {
//             return el.id === currency.id;
//         })
//         let calc = null


//         if(myCurrenciesFind[0]) {
//             const currenCurrency = myCurrenciesFind[0]['coinValue']
//             calc = Math.round(currency.price_usd * currenCurrency)/ 100
//         } else {
//             calc = 0            
//         }


//         return (
//           <Currency
//             key={currency.id}
//             id={currency.id}
//             name={currency.name}
//             curValue={currency.price_usd}
//             valueChange={currency.percent_change_24h}
//             symbol={currency.symbol}
//             ownedCurrency={props.ownedCurrency}
//             handleChange={props.handleChange}
//             handleAddCurrency={props.handleAddCurrency}
//             calc={calc}
//             />

//         )
//       })
//     return (
        // <table className="bitcoin-table">
        //     <thead>
        //         <tr>
        //         <th>Name</th>
        //         <th>Short Name</th>
        //         <th>$ Value</th>
        //         <th >last 24h</th>
        //         <th>Amout you own</th>
        //         <th>$ value of your coin</th>
        //         </tr>

        //     </thead>
        //     <tbody>
        //     {currencies}                
        //     </tbody>
        // </table>
//     )
// }



