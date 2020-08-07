export const state = () => ({
  dataTodos: [
    {
      id: 1,
      isDone: false,
      title: "Big Design Meeting",
      time: "10.30 - 12.30"
    },
    {
      id: 2,
      isDone: true,
      title: "Big Developer Meeting",
      time: "09.30 - 12.30"
    }
  ]
});

export const mutations = {
  markDone(state, id) {
    state.dataTodos.map(item => {
      if (id === item.id) {
        // To Change isDone depends on its' state whether its true/false.
        item.isDone = !item.isDone;
      }
    });
  }
};

export const getters = {};
