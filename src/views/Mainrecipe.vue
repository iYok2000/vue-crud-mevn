<template>
  <div class="Mainrecipe">
    <h1>My Healthy menu</h1>
    <a
      class="btn btn-primary btn-shadow btn-lg"
      @click="togglePopup"
      role="button"
      >สร้างเมนูอาหาร</a
    >
    <div class="recipes">
      <div
        class="card"
        v-for="recipe in $store.state.recipes"
        :key="recipe.slug"
      >
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.slug}`">
          <button class="btn btn-success btn-block">อ่านต่อเลย</button>
        </router-link>
      </div>
    </div>

    <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <h2 class="btn-primary mt-3">Add new recipe</h2>

        <form @submit.prevent="addNewRecipe">
          <div class="group">
            <label>ชื่อเมนู</label>
            <input type="text" v-model="newRecipe.title" />
          </div>

          <div class="group">
            <label>กล่าวนำ</label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>

          <div class="group">
            <label>ส่วนผสม</label>
            <div
              class="ingredient"
              v-for="i in newRecipe.ingredientRows"
              :key="i"
            >
              <input type="text" v-model="newRecipe.ingredients[i - 1]" />
            </div>

            <a
              class="btn btn-primary btn-shadow btn-lg"
              @click="addNewIngredient"
              role="button"
              >Add Ingredient</a
            >
          </div>

          <div class="group">
            <label>ขั้นตอนการทำ</label>
            <div class="method" v-for="i in newRecipe.methodRows" :key="i">
              <textarea v-model="newRecipe.method[i - 1]"></textarea>
            </div>

            <a
              class="btn btn-primary btn-shadow btn-lg"
              @click="addNewStep"
              role="button"
              >Add step</a
            >
          </div>

          <button type="submit" class="btn btn-success btn-block">
            Add Recipe
          </button>
          <button type="button" @click="togglePopup" class="btn-danger mt-3">
            Close
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Mainrecipe",
  setup() {
    const newRecipe = ref({
      title: "",
      description: "",
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1,
    });
    const popupOpen = ref(false);
    const store = useStore();

    const togglePopup = () => {
      popupOpen.value = !popupOpen.value;
    };

    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++;
    };

    const addNewStep = () => {
      newRecipe.value.methodRows++;
    };

    const addNewRecipe = () => {
      newRecipe.value.slug = newRecipe.value.title
        .toLowerCase()
        .replace(/\s/g, "-");

      if (!newRecipe.value.slug) {
        alert("Please enter a title");
        return;
      }

      store.commit("ADD_RECIPE", { ...newRecipe.value });

      newRecipe.value = {
        title: "",
        description: "",
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1,
      };

      togglePopup();
    };

    return {
      newRecipe,
      addNewRecipe,
      togglePopup,
      popupOpen,
      addNewStep,
      addNewIngredient,
    };
  },
};
</script>

<style scoped>
.Mainrecipe {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  border: 1px solid red;

}
label {
  color: blanchedalmond;
}
h1 {
  font-size: 3rem;
  margin-bottom: 32px;
  color: white;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  color: white;
  background-color: #081c33;
}
.recipes .card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.add-recipe-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-recipe-popup .popup-content {
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}
.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup-content .group {
  margin-bottom: 1rem;
}
.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}
.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.popup-content .group textarea {
  height: 100px;
  resize: none;
}
.popup-content button[type="submit"] {
  margin-right: 1rem;
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