import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Shop = () => {

  const dispatch = useDispatch();

  const actions = bindActionCreators(actionCreators, dispath);



  return (
    // <div className='container'>
    //     <h1>Buy and sell stocks</h1>
    //     <button className='btn btn-primary mx-2' onClick={()=>(dispatch(actionCreators.withdrawMoney(100)))}>-</button>
    //     Add or sell 
    //     <button className='btn btn-primary mx-2' onClick={()=>(dispatch(actionCreators.depositMoney(100)))}>+</button>
    // </div>
    // to avoid this we use bindActionCreators



    <div className='container'>
      <h1>Buy and sell stocks</h1>
      <button className='btn btn-primary mx-2' onClick={() => (actions.withdrawMoney(100))}>-</button>
      Add or sell
      <button className='btn btn-primary mx-2' onClick={() => (actions.depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop 