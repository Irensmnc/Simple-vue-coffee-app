export function delCoffee(context, coffee) {
  context.commit("DELETE_COFFEE", coffee);
}

export function deleteAll({ commit }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit("DELETE_ALL");
      resolve();
    }, 1500);
  });
}