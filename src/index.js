/**
 * Created by jorgeayala on 23/02/2017.
 */

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default :
            return state;
    }
};

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)


const store = createStore(counter);

const render = () => {
    ReactDOM.render(
        <Counter
            value={ store.getState() }
            onIncrement={ () =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={ () =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();

const test = {
    id: 0,
    text: 'test!!',
    completed: true
};

let toggle = (element) => {
    // return Object.assign({}, element, {
    //     completed : !element.completed
    // });

    return {
        ...element,
        completed: !element.completed
    }
};

console.log(JSON.stringify(test, null, 4));

console.log(JSON.stringify(toggle(test), null, 4));
