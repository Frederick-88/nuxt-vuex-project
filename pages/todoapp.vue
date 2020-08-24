<template>
  <div>
    <h2 class="nuxt__text text-center">TO-DO-APP</h2>
    <section class="nuxt-bg">
      <div class="mb-4 mx-5 d-flex justify-content-center">
        <div
          class="bg-white w-50 p-3 d-flex justify-content-center"
          style="border-radius:0.25rem"
        >
          <!-- No function, directly change the state of "displayAddTodoModal" -->
          <button
            @click="displayAddTodoModal = !displayAddTodoModal"
            class="btn btn-outline-nuxt"
          >
            ADD TODO
            <i class="far fa-plus ml-2 fa-lg"></i>
          </button>
          <div class="vertical-border ml-3 mr-2"></div>
          <div>
            <span v-if="sortByDone" class="d-flex d-row">
              <button @click="sortByDoneFunction" class="btn nuxt-icon-button">
                <i class="far fa-check-circle fa-lg"></i>
              </button>
              <p class="font-weight-bold align-self-center my-0 nuxt__text">
                Sort By Done ({{ dataTodosDoneLength }})
              </p>
            </span>
            <span v-else class="d-flex d-row">
              <button
                @click="sortByDoneFunction"
                class="btn nuxt-secondary-icon-btn"
              >
                <i class="far fa-circle fa-lg"></i>
              </button>
              <p class="font-weight-bold align-self-center my-0 nuxt__text">
                Sort By Done ({{ dataTodosDoneLength }})
              </p>
            </span>
          </div>
        </div>
      </div>

      <div class="mx-5">
        <!-- if sortByDone = false, will map the data from all todos ("dataTodos") -->
        <div v-if="!sortByDone" class="row">
          <div
            v-for="(dataTodo, index) in dataTodos"
            :key="index"
            class="col-12 d-flex justify-content-center"
          >
            <div class="card mb-3 w-50">
              <div class="row no-gutters">
                <div class="col-md-2 my-auto text-center">
                  <button
                    v-if="dataTodo.isDone"
                    @click="markDone(dataTodo.id)"
                    class="btn nuxt-icon-button"
                  >
                    <i class="far fa-check-circle fa-2x"></i>
                  </button>
                  <button
                    @click="markDone(dataTodo.id)"
                    v-else
                    class="btn nuxt-secondary-icon-btn"
                  >
                    <i class="far fa-circle fa-2x"></i>
                  </button>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5
                      :class="{ doneTxt: dataTodo.isDone }"
                      class="card-title nuxt__text font-weight-bold"
                    >
                      {{ dataTodo.title }}
                    </h5>
                    <p class="card-text text-secondary">{{ dataTodo.time }}</p>
                  </div>
                </div>
                <div class="col-md-2 my-auto text-center">
                  <button
                    @click="deleteTodo(dataTodo.id)"
                    class="btn delete-btn"
                  >
                    <i class="far fa-times-circle fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Else if sortByDone = true, will map the data from filtered Data ("dataTodosDone"). Reached from getter -->
        <div v-else class="row">
          <div
            v-for="(dataTodo, index) in dataTodosDone"
            :key="index"
            class="col-12 d-flex justify-content-center"
          >
            <div class="card mb-3 w-50">
              <div class="row no-gutters">
                <div class="col-md-2 my-auto text-center">
                  <button
                    v-if="dataTodo.isDone"
                    @click="markDone(dataTodo.id)"
                    class="btn nuxt-icon-button"
                  >
                    <i class="far fa-check-circle fa-2x"></i>
                  </button>
                  <button
                    @click="markDone(dataTodo.id)"
                    v-else
                    class="btn nuxt-secondary-icon-btn"
                  >
                    <i class="far fa-circle fa-2x"></i>
                  </button>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5
                      :class="{ doneTxt: dataTodo.isDone }"
                      class="card-title nuxt__text font-weight-bold"
                    >
                      {{ dataTodo.title }}
                    </h5>
                    <p class="card-text text-secondary">{{ dataTodo.time }}</p>
                  </div>
                </div>
                <div class="col-md-2 my-auto text-center">
                  <button
                    @click="deleteTodo(dataTodo.id)"
                    class="btn delete-btn"
                  >
                    <i class="far fa-times-circle fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal of AddTodo, Vue modal is limited can't explore too much. Need another Better modal. -->
      <b-modal
        v-model="displayAddTodoModal"
        title="Add your new Todo"
        header-bg-variant="success"
        header-text-variant="light"
        hide-footer
      >
        <form @submit.prevent="addTodoList">
          <p class="mb-1">Title of Todo</p>
          <input
            v-model="addTodoInput.title"
            type="text"
            class="w-100 mb-3 form-control"
            required
          />
          <p class="mb-1">Time</p>
          <input
            v-model="addTodoInput.time"
            type="text"
            class="w-100 form-control"
            required
          />
          <div class="d-flex d-row mt-4">
            <button
              type="button"
              @click="displayAddTodoModal = !displayAddTodoModal"
              class="btn btn-outline-danger w-50 mr-4"
            >
              Close
            </button>
            <button type="submit" class="btn btn-outline-nuxt w-50">Add</button>
          </div>
        </form>
      </b-modal>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      displayAddTodoModal: false,
      sortByDone: false,
      number1: 2,
      number2: 3,
      // AddTodoInputs, if still problem try -> https://vuex.vuejs.org/guide/forms.html
      addTodoInput: {
        title: "",
        time: ""
      }
    };
  },
  methods: {
    // 2nd Better way, on doing actions in Vuex
    ...mapActions({
      addTodoAction: "todos/addTodoAction",
      removeTodoAction: "todos/removeTodoAction"
    }),
    markDone(id) {
      // this is 1 way on doing mutation.
      // if the file that you target in store was only index, "increment" would be enough. But if it's in another file then do like import, like this:
      this.$store.commit("todos/markDone", id);
    },
    sortByDoneFunction() {
      this.sortByDone = !this.sortByDone;
    },
    deleteTodo(id) {
      this.removeTodoAction(id);
    },
    // Submit addTodoInput
    addTodoList() {
      let addTodoInputData = {
        // generate an absolute random ID.
        id: Date.now(),
        isDone: false,
        title: this.addTodoInput.title,
        time: this.addTodoInput.time
      };

      // in case you want to put a lot of data/parameter, watch "https://github.com/Frederick-88/vue-vuex-setup"
      this.addTodoAction({
        data: addTodoInputData
      });

      // After Submit Close Modal & Reset Input
      this.displayAddTodoModal = false;
      (this.addTodoInput.title = ""), (this.addTodoInput.time = "");
    }
  },
  // this is how you console log in nuxt
  mounted() {
    console.log(this.dataTodosDoneLength);
  },
  computed: {
    // mapGetters will only map (like ReactJS) the getters in our Vuex.
    ...mapGetters({
      // see this for docs "https://codesandbox.io/s/gallant-tu-icxrw?file=/pages/todos.vue:526-570", basically "(our filename)/(getterName)"
      dataTodosDone: "todos/dataTodosDone",
      dataTodosDoneLength: "todos/dataTodosDoneLength"
    }),
    // this is how you add another computed property, you can't define another computed property inside mapGetter.
    addLocalNumber() {
      return this.number1 + this.number2;
    },
    // this is 1 way to call a state. $store is already global, a state must always putted in computed. So if there are changes it will be returned.
    dataTodos() {
      return this.$store.state.todos.dataTodos;
    }
  },
  // subscribe the store in Vuex, to receive any changes that happening
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      console.log("state changes");
      console.log(state);
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  }
};
</script>

<style>
/* Change the style of toast */
.Vue-Toastification__toast--success {
  background-color: #39b982 !important;
}
/* ------------------------- */
.btn:focus {
  box-shadow: none;
}
.btn-outline-nuxt {
  color: #39b982;
  border-color: #39b982;
  font-weight: bold;
}
.btn-outline-nuxt:hover {
  background-color: #39b982;
  color: whitesmoke;
}
.bg-success {
  background-color: #39b982 !important;
}
.doneTxt {
  text-decoration: line-through;
  color: #35495e;
}
.delete-btn {
  color: #dc3545;
}
.delete-btn:hover {
  color: #ff97a1;
}
.nuxt-secondary-icon-btn {
  background: transparent;
  color: #bbbbbb;
}
.nuxt-secondary-icon-btn:hover {
  color: #39b982;
}
.nuxt-icon-button {
  background: transparent;
  color: #39b982;
}
.nuxt-icon-button:hover {
  color: #bbbbbb;
}
.nuxt-bg {
  background-color: #39b982;
  border-radius: 2rem;
  padding: 3rem;
}

.nuxt__border {
  border-top: 1px solid #39b982;
}
.vertical-border {
  border-left: 2px solid #39b982;
}
</style>
