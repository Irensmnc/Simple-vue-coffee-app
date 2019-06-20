<template>
  <div>
    <div>
      <h4>Coffee Recipes App</h4>
      <p>There are currently {{ countCoffees }} coffee recipes</p>

      <button :click="deleteAllCoffees">Delete all coffee recipes</button>
      <p>{{ msg }}</p>
    </div>
    <div>
      <form @submit.prevent="addCoffee">
        <input class="link-input" type="text" placeholder="Add a Coffee" v-model="newCoffee"/>
      </form>
      <div class="home container">
        <div class="card" v-for="coffee in coffees" :key="coffee.id">
          <div class="card-content">
            <i class="material-icons" @click="deleteCoffee(coffee.id)">delete</i>
            <h2>{{ coffee.title }}</h2>
            <ul>
              <li v-for="(ing, index) in coffee.ingredients" :key="index">
                <span class="collection-item">{{ ing }}</span>

              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
