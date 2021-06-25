import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Basket from "./Basket.png"
import { ADD, REMOVE } from "./actions/index"
function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Basket);
  console.log(state)
  return (
    <div className="App">
      <img src={Basket} />
      <div className="Basket">
        <div className="AddItem">
          <a onClick={() => dispatch(ADD("Strawberry",1))}>
            <div className="CheckItem">
              <i class="far fa-square"></i>
              <h5>Strawberry</h5>
            </div>
          </a>
          <a onClick={() => dispatch(ADD("Blueberry",2))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Blueberry</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Orange",3))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Orange</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Banana",4))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Banana</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Apple",5))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Apple</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Carrot",6))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Carrot</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Celery",7))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Celery</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Mushroom",8))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Mushroom</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Green Pepper",9))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Green Pepper</h5></div>
          </a>
          <a onClick={() => dispatch(ADD("Eggs",10))}>
            <div className="CheckItem"><i class="far fa-square"></i><h5>Eggs</h5></div>
          </a>
      </div>
      
      <div className="RemoveItem">
          {state.basket.map(item => (
              <a onClick={()=>{dispatch(REMOVE())}}>
              <div className="CheckItem"><i class="far fa-square"></i><h5>{ item}</h5></div>
            </a>
          ))}
        </div>
        </div>
    </div>
    
  );
}

export default App;
