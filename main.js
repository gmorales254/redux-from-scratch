
const reducer = (state = [], action) => {
    console.log("Reducer: ", state, action)
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];
        default:
            return state
    }
}

const store = Redux.createStore(reducer);


// elements 
const usrlist = document.getElementById("userList");
const btn = document.getElementById("btnAddUser");
const txt = document.getElementById("txtUser");

// dispatch event active the action
btn.addEventListener("click", () => {
    store.dispatch({ type: "ADD_USER", payload: txt.value })
})


// I subscribe from the store to improve an event handler 
store.subscribe(() => {
    usrlist.innerHTML = "";
    txt.value = "";
    store.getState().forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        usrlist.appendChild(li);
    });
})