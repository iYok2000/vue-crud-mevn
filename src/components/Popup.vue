<template>
  <div class="hello">
    
    <a11y-dialog id="page-dialog" @dialog-ref="assignDialogReference">
      <template #closeButtonContent> Close page dialog </template>
      <div>Page dialog content</div>
    </a11y-dialog>
  </div>
</template>

<script>
export default {
  name: "Popup",

  data() {
    return {
      dialog: null,
      msg: "Welcome to Your Vue.js App",
    };
  },

  methods: {
    assignDialogReference(dialog) {
      this.dialog = dialog;
    },

    openDialogFromPage() {
      if (this.dialog) {
        this.dialog.show();
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
