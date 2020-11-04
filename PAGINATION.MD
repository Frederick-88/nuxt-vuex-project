#### Pagination Javascript examples - VUE

###### Cases are :

- 1 2 3 4 5 (6) 7 8 9 10 11 => if the paginate can be like this
- 1 2 3 4 5 6 => if paginate comes to start
- 6 7 8 9 10 11 => if paginate comes to end
- 1 2 3 => if paginate only have short amount of page

##### ---------------------------------------------------

```vue
<template lang="pug">
  section.project-pagination(v-show="totalPages > 1")
    BaseButton.pagination__button(
      :is-hollow="true"
      :is-primary="true"
      :class="{'is-disabled': !hasPrev}"
      @click="decreasePagination(activePagination)"
    ) Prev

    template(v-if="totalPages > 6 && !isNextPrevActivePaginationAtLimit")
      div.pagination__lists(v-for="page in availableNextPrevPages")
        button.lists__number-box(
          :class="{'is-active': activePagination === page}"
          type="button"
          @click="selectPagination(page)"
        ) {{page}}
    template(v-else-if="totalPages > 6")
      div.pagination__lists(v-for="page in availablePages")
        button.lists__number-box(
          :class="{'is-active': activePagination === page}"
          type="button"
          @click="selectPagination(page)"
        ) {{page}}
    template(v-else)
      div.pagination__lists(v-for="page in totalPages")
        button.lists__number-box(
          :class="{'is-active': activePagination === page}"
          type="button"
          @click="selectPagination(page)"
        ) {{page}}

    BaseButton.pagination__button(
      :is-hollow="true"
      :is-primary="true"
      :class="{'is-disabled': !hasNext}"
      @click="increasePagination(activePagination)") Next
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { PROJECT_PER_PAGE } from "@/assets/scripts/variables";

export default {
  name: "ProjectPagination",
  computed: {
    ...mapState("projects", ["selectedSortMethod", "selectedPagination"]),
    ...mapGetters("projects", ["getTotalProjects"]),
    isNextPrevActivePaginationAtLimit() {
      // check limit and see if current page can be made into 5-page-paginate-system
      // e.g ( 7-5 >= 1 && 7+5 < 12)
      if (
        this.activePagination - 5 >= 1 &&
        this.activePagination + 5 <= this.totalPages
      ) {
        return false;
      }
      return true;
    },
    // for 5-page-paginate-system like ( 2 3 4 5 6 (7) 8 9 10 11 12 )
    availableNextPrevPages() {
      // push the prev 5 page
      const startPrev = this.activePagination - 5;
      const array = [];
      let i;
      for (i = startPrev; i < this.activePagination; i++) {
        array.push(i);
      }
      // push current page
      array.push(this.activePagination);
      // push the next 5 page
      const endNext = this.activePagination + 5;
      for (i = this.activePagination + 1; i <= endNext; i++) {
        array.push(i);
      }
      return array;
    },
    // for pagination that doesn't have like above
    availablePages() {
      let array = [];
      // getting the last 6 if active Pagination was going into the end of pagination
      // e.g 30 > 35-6
      if (this.activePagination > this.totalPages - 6) {
        const start = this.totalPages - 5;
        const endNext = this.totalPages;
        let i;
        for (i = start; i <= endNext; i++) {
          array.push(i);
        }
      } else {
        // getting first 6 only for the case of activePagination < (smaller than) 6
        array = [1, 2, 3, 4, 5, 6];
      }
      return array;
    },
    paramsUrlFolderGotValue() {
      return this.$route.query.folder;
    },
    totalPages() {
      return Math.ceil(this.getTotalProjects / PROJECT_PER_PAGE);
    },
    hasPrev() {
      if (this.activePagination > 1) return true;
      return false;
    },
    hasNext() {
      if (this.activePagination < this.totalPages) return true;
      return false;
    },
    activePagination() {
      // change string to object so we can compare with object too above.
      const pageNumOnly = JSON.parse(this.selectedPagination.split("page")[1]);
      return pageNumOnly;
    }
  },
  methods: {
    ...mapActions("projects", ["getProjectData"]),
    selectPagination(pageSelected) {
      const sortProjectBy = this.selectedSortMethod;

      this.getProjectData({
        pageSelected,
        sortProjectBy
      });
    },
    decreasePagination(pageSelected) {
      const sortProjectBy = this.selectedSortMethod;

      this.getProjectData({
        pageSelected: pageSelected - 1,
        sortProjectBy
      });
    },
    increasePagination(pageSelected) {
      const sortProjectBy = this.selectedSortMethod;

      this.getProjectData({
        pageSelected: pageSelected + 1,
        sortProjectBy
      });
    }
  }
};
</script>

<style lang="scss">
// wrap in "project-pagination" class to avoid conflict with future pagination classes
.project-pagination {
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;

  .pagination__button {
    display: block;
    border: none;
    height: 100%;
    padding: 0 0.5rem;
    border-radius: 0.125rem;
    transition: 0.3s;
    font-weight: 600;
    font-size: 0.75rem;
    color: $projectPaginationActive;
    &:hover {
      background-color: $homeCTAButton;
      color: white;
    }
  }
  .is-disabled {
    visibility: hidden;
  }

  .pagination__lists {
    font-size: 0.875rem;
    margin: 0 0.1rem;

    .lists__number-box {
      padding: 0.45rem 0.625rem;
      border-radius: 0.125rem;
      margin: 0 0.1rem;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: $homeCTAButton;
        color: white;
      }
    }
    .is-active {
      background: $projectPaginationActive;
      color: $white;
      font-weight: 600;
    }
  }
}
</style>
```
