<script setup>

import { useBMIStore } from "../stores/BMIstore.js"
import { storeToRefs } from "pinia";

const BMIStore = useBMIStore()
// need to call useBMIStore function to create a reactive reference
// BMIStore will hold our data for this app now

const { userHeight } = storeToRefs(BMIStore)
const { userWeight } = storeToRefs(BMIStore)
// store to refs is a pinia function
// converts this data to reactive references

</script>

<template>

  <h2>Enter your height and weight</h2>

  <label>Height in meters</label>
  <input v-model="userHeight">
  <!-- must use v-model to set up reactive reference -->
  <br>


<!-- todo use v-model -->
  <label>Weight in kilograms</label>
  <input v-model="userWeight">
  <br>
  <!-- userHasSubmittedData method will start when clicked -->
  <button v-on:click="userHasSubmittedData">Calculate!</button>

</template>

<style scoped>

button {
  background-color: lightblue;
}

</style>
