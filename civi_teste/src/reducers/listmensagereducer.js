const INITIAL_STATE = []

export default function listmensagereducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case "NEW_ITEM":
      return [...state, action.item]
    case "READ_ITEM":
      state[action.index].status = true;
      return [...state]
    default:
      return state;
  }
};