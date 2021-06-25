import React from 'react'
import { useSelector, useDispatch } from "react-redux";
function AddItem() {
    const state = useSelector(state => state.Basket);
    return (
        <div>
            {state.basket.map(item => {
            <a >
              <div className="CheckItem"><i class="far fa-square"></i><h5>{ item }</h5></div>
          </a>
          })}
        </div>
    )
}

export default AddItem
