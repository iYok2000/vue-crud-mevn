<template>
  <div class="hello">
    
    <a11y-dilog id="page-dialog" @dialog-ref="asignDialogReference">
      <template #closeButtonContent> Close page dialog </template>
      <div>Page dialog content</div>
    </a11y-dilog>
  </div>
</template>

<script>
export default {
  name: "pop",

  data() {
    return {
      dilog: null,
      msg: "Welcome to Your Vue.js App",
    };
  },

  methods: {
    aasignDialogReference(dilog) {
      this.dilog = dilog;
    },

    openDialogFromPage() {
      if (this.dilog) {
        this.dilog.show();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
