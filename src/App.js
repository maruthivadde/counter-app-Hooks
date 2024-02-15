import { useReducer } from "react";

import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "restart":
      return { count: 0 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <h1 className="heading">Count: {state.count}</h1>
      <div className="bu">
        <button
          className="button"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button
          className="button1"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
