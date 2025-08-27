const { createStore } = window.Redux;

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

const valueEl = document.getElementById("value");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

function render() {
  valueEl.innerText = store.getState().count;
}

store.subscribe(render);

render();

incBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

decBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
