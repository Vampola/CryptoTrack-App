import React from 'react'
import './currency.scss';
import {Link} from 'react-router-dom'

const currency = (props) => {
    return (
        <tr>
            <td><Link to={'/' + props.id}>{props.name}</Link></td>
            <td>{props.symbol}</td>
            <td>$ {Math.round(props.curValue * 100) / 100}</td>
            <td style={{color: props.valueChange < 0 ? "red" : "green"}}>{props.valueChange} %</td>
            <td>
                {/* <form onSubmit={() => props.handleAddCurrency(props.id, props.curValue)}> */}
                <form>
                <input id={props.id} onChange={props.handleChange}/>
                <br />
                <button type="submit" disabled={props.amountOwned === ''}>Submit</button>
                </form>
                
            </td>
            <td>$ {props.calc}</td>
        </tr>

    )
}

export default currency;