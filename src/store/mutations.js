export function DELETE_COFFEE(state, coffee) {
  state.coffees.splice(coffee, 1)
}

export function ADD_COFFEE(state, coffee) {
  state.coffees.push(coffee);
}

export function DELETE_ALL(state) {
  state.coffees = []
}