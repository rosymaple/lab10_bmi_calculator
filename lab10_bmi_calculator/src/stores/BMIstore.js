// this store stores data our app needs.
// specifically data that needs to be shared between different app components

import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// defineStore is our function to define what data is stored in store
// the arguments to the function define the data

// exporting means we can make this available to other code
// that needs to use the store

export const useBMIStore = defineStore('bmi', () => {

    // define the data our store will store
    const userHeight = ref(0)
    const userWeight = ref(0)

    const calculatedBmi = computed ( () => {
        // todo do math with height and weight
        const bmi = userWeight.value / (userHeight.value * userHeight.value)
        return bmi;
    })

    // need to return an object with all data that will be accessed using components
    return {
        // refs
        userHeight,
        userWeight,
        // computed properties
        calculatedBmi
    }

})