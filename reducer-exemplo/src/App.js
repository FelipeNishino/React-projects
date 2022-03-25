import React from 'react';

const actions = {
    SUBTRAIR: 'SUBTRAIR',
    SOMAR: 'SOMAR',
    DOBRAR: 'DOBRAR',
    METADE: 'METADE',
    ZERAR: 'ZERAR'
}


function reduce(state, action){
    switch(action.type){
        case actions.SUBTRAIR:
            return {...state, count: state.count - 1 };
        case actions.SOMAR:
            return {...state, count: state.count + 1 };
        case actions.DOBRAR:
            return {...state, count: state.count * 2 };
        case actions.METADE:
            return {...state, count: state.count / 2 };
        case actions.ZERAR:
            return {...state, count: 0 };
        default:
            return state;
    }
}


function App(){
    const initialValue = { count : 0 }
    const [state, dispatch] = React.useReducer(reduce, initialValue);

    return (
    <>
        <h1>Contador</h1>
        <span>{state.count}</span>
        <br />
        <button onClick={()=>dispatch({ type: actions.SUBTRAIR })}>-</button> 
        <button onClick={()=>dispatch({ type: actions.SOMAR })}>+</button>
        <button onClick={()=>dispatch({ type: actions.DOBRAR })}>dobro</button> 
        <button onClick={()=>dispatch({ type: actions.METADE })}>metade</button> 
        <button onClick={()=>dispatch({ type: actions.ZERAR })}>zerar</button> 
    </>);
}

export default App;