<script setup>
import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";
// this will import data from our BMIForm containing our template
import { useBMIStore } from "./stores/BMIstore.js";
// this will import data from BMIstore
// BMIstore stores reactive data

import { storeToRefs } from "pinia";
// this import converts properties into reactive data
const BMIStore = useBMIStore()
// BMIStore will call the useBMIStore function

const { calculatedBmi } = storeToRefs(BMIStore)
// calculatedBmi is our computed property in BMI store
// converting calculatedBmi into reactive reference using storeToRefs

</script>

<template>
  <h1>Body Mass Index Calculator</h1>

  <BodyMassIndexForm/>
  <!-- triggers component to load -->

  <!-- print reactive reference for the user -->
  <div>Your BMI is {{ calculatedBmi }}</div>
</template>

<style scoped>

</style>
