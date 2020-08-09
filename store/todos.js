export const state = () => ({
  dataTodos: [
    {
      id: 1596950024122,
      isDone: true,
      title: "Learn Nuxt and Vuex",
      time: "14.15 - 15.45"
    },
    {
      id: 1596950024184,
      isDone: false,
      title: "Master complete of Vuex (Action, Mutation, Getter, State)",
      time: "19.30 - 21.30"
    }
  ]
});

export const actions = {
  addTodoAction(context, data) {
    context.commit("addTodoList", data);
  },
  removeTodoAction(context, id) {
    context.commit("removeTodoList", id);
  }
};

export const mutations = {
  markDone(state, id) {
    state.dataTodos.map(item => {
      if (id === item.id) {
        // To Change isDone depends on its' state whether its true/false.
        item.isDone = !item.isDone;
      }
    });
  },
  // You can try to remove the {} from data. It will still works but worse return received later.
  addTodoList(state, { data }) {
    state.dataTodos = [...state.dataTodos, data];

    // Notification Toast
    this.$toast.info("You've just added your TodoList!", {
      timeout: 4000,
      icon: "fab fa-vuejs"
    });
  },
  removeTodoList(state, id) {
    // filtering todoList and remove the todo with the same id.
    const removedTodoList = state.dataTodos.filter(item => {
      if (item.id === id) {
        // if the id is same then don't include inside.
        return false;
      } else {
        return true;
      }
    });
    state.dataTodos = removedTodoList;

    // Notification Toast
    this.$toast.success("You've deleted a TodoList!", {
      timeout: 4000,
      icon: "fab fa-vuejs"
    });
  }
};

export const getters = {
  dataTodosDone: state => {
    // will filter item with isDone(true)
    return state.dataTodos.filter(todo => todo.isDone);
  },
  // we can get from getters as well
  dataTodosDoneLength: (state, getters) => {
    return getters.dataTodosDone.length;
  }
};
