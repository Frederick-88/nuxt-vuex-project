<template>
  <div>
    <h2 class="nuxt__text text-center">TO-DO-APP</h2>
    <section class="nuxt-bg">
      <div class="mb-4 d-flex justify-content-center">
        <div class="bg-white w-50 p-3 d-flex justify-content-center" style="border-radius:1rem">
          <button class="btn btn-outline-nuxt">
            ADD TODO
            <i class="far fa-plus ml-2 fa-lg"></i>
          </button>
          <div class="vertical-border ml-3 mr-2"></div>
          <div>
            <span v-if="sortByDone" class="d-flex d-row">
              <button @click="sortByDoneFunction" class="btn nuxt-button">
                <i class="far fa-check-circle fa-lg"></i>
              </button>
              <p class="font-weight-bold align-self-center my-0 nuxt__text">Sort By Done</p>
            </span>
            <span v-else class="d-flex d-row">
              <button @click="sortByDoneFunction" class="btn nuxt-secondary-btn">
                <i class="far fa-circle fa-lg"></i>
              </button>
              <p class="font-weight-bold align-self-center my-0 nuxt__text">Sort By Done</p>
            </span>
          </div>
        </div>
      </div>

      <div class="mx-5">
        <div class="row">
          <div
            v-for="(dataTodo, index) in dataTodos"
            :key="index"
            class="col-12 d-flex justify-content-center"
          >
            <div class="card mb-3 w-50">
              <div class="row no-gutters">
                <div class="col-md-2 my-auto text-center">
                  <button
                    v-if="(dataTodo.isDone)"
                    @click="markDone(dataTodo.id)"
                    class="btn nuxt-button"
                  >
                    <i class="far fa-check-circle fa-2x"></i>
                  </button>
                  <button @click="markDone(dataTodo.id)" v-else class="btn nuxt-secondary-btn">
                    <i class="far fa-circle fa-2x"></i>
                  </button>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title nuxt__text font-weight-bold">{{dataTodo.title}}</h5>
                    <p class="card-text text-secondary">{{dataTodo.time}}</p>
                  </div>
                </div>
                <div class="col-md-2 my-auto text-center">
                  <button @click="deleteTodo(dataTodo.id)" class="btn delete-btn">
                    <i class="far fa-times-circle fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import {mapGetters} from "vuex"
export default {
  data() {
    return {
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
      ],
      sortByDone: false
    };
  },
  methods: {
    markDone(id) {
      this.dataTodos.map(item => {
        if (id === item.id) {
          // To Change isDone depends on its' state whether its true/false.
          item.isDone = !item.isDone;
        }
      });
    },
    sortByDoneFunction() {
      this.sortByDone = !this.sortByDone;
    },
    deleteTodo(id) {
      console.log(id);
    }
  },
  computed: {}
};
</script>

<style>
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
.delete-btn {
  color: #dc3545;
}
.delete-btn:hover {
  color: #ff97a1;
}
.nuxt-secondary-btn {
  background: transparent;
  color: #bbbbbb;
}
.nuxt-secondary-btn:hover {
  color: #39b982;
}
.nuxt-button {
  background: transparent;
  color: #39b982;
}
.nuxt-button:hover {
  color: #bbbbbb;
}
.nuxt-bg {
  background-color: #39b982;
  border-radius: 2rem;
  padding: 3rem;
}
.nuxt__text {
  color: #39b982;
}
.nuxt__border {
  border-top: 1px solid #39b982;
}
.vertical-border {
  border-left: 2px solid #39b982;
}
</style>