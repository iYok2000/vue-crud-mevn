<template>
  <div class="recipe">
      <div class="btn btn-primary btn-shadow btn-lg">
          <router-link to="/mainrecipe" class="btn-primary mt-3">&lt; Back</router-link>
      </div>
    
    <h1>{{ recipe.title }}</h1>
    <p class="desc">{{ recipe.description }}</p>
    <hr />
    <div class="ingredients">
      <h3>ส่วนผสมหลัก</h3>
      <ul>
        <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="method">
      <h3>ขั้นตอนการทำ</h3>
      <ol>
        <li v-for="(step, i) in recipe.method" :key="i">
          <span v-html="cleanText(step)"></span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipe() {
      return this.$store.state.recipes.find(
        (recipe) => recipe.slug === this.$route.params.slug
      );
    },
  },
  methods: {
    cleanText(text) {
      return text.replace(/\n/g, "<br />");
    },
  },
};
</script>

<style scoped>
.recipe {
  padding: 10rem;
  max-width: 100%;
  height: 100%;
  margin: 0;
  background-color: #021122;
  
}
.desc {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
hr {
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1rem;
  color: rgb(255, 251, 251);
  font-size: 24px;
  background-color: cornflowerblue;
}
h1 {
  color: rgb(255, 251, 251);
  font-size: 3rem;
  margin-bottom: 32px;
}
p {
  color: rgb(255, 251, 251);
}
.ingredients {
  padding: 1rem;
  background-color: #081c33;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: rgb(255, 251, 251);
}
.method ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid rgb(24, 27, 209);
  color: rgb(255, 251, 251);
}
button:focus {
  outline: none;
  box-shadow: none;
}

.btn:hover,
a:hover {
  text-decoration: none;
  color: #e22104;
}

.btn-icon {
  display: inline-flex;
  align-items: center;
}
.btn-icon .lnr {
  font-size: 30px;
  margin-right: 10px;
}
</style>