# nuxt-vuex-project

### Notes:

- each file in store folder must not possess capital in front of file name
- you can't change state directly, you need to use mutation every time want to change state
- ways that vuex in nuxt works, is different from usual. mutation,action,getter,etc. make sure to learn from docs in nuxt, or scrimba, or vueschool.
- creating a form in Vuex, when submit you need to create a new variable to contain the objects. Because it will conflict with v-model and error once you run it. And also so you could reset the inputs again.
- using state, you need to put it in computed. So when there are changes it will update.
- sometimes when there are problem, try to modify the result from prettier.
- Modal Assisted with Vue-Bootstrap
- Integrated Vue-Color by XiaoKaiKe in NUXT

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
