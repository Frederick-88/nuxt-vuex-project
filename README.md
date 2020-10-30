# nuxt-vuex-project

### Notes:

- each file in store folder must not possess capital in front of file name
- you can't change state directly, you need to use mutation every time want to change state
- ways that vuex in nuxt works, is different from usual. mutation,action,getter,etc. make sure to learn from docs in nuxt, or scrimba, or vueschool.
- creating a form in Vuex, when submit you need to create a new variable to contain the objects. Because it will conflict with v-model and error once you run it. And also so you could reset the inputs again.
- using state, you need to put it in computed. So when there are changes it will update.
- Integrated Vue-Color by XiaoKaiKe in NuxtJS
- Google drive file upload

## Axios Delete Req.Body send handling

    const deleteLogoData = {
      brand_id: brandId,
      logo: splitFileName,
    };

    function serialize(obj) {
      return `?${Object.keys(obj)
        .reduce((a, k) => {
          a.push(`${k}=${encodeURIComponent(obj[k])}`);
          return a;
        }, [])
        .join('&')}`;
    }
    
    axios.delete(
        `/accounts/brands/delete-logo/${brandId}/${splitFileName}${serialize(
          deleteLogoData
        )}`
      );

