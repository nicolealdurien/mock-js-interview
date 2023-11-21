/*
Instructions:

Complete the following 4 JS problems. Update the test file, run it, and confirm the tests are passing.

After completing the JS problems, solve the React problem described at the bottom of this file.
 */

// { name: 'Alfred', age: 7, breed: 'Pug', breedCode: 'pug' },

// Using the dogs array, write a function returning an array of dogs 3 and older
export const getDogsThreeOrOlder = (dogsArray) => dogsArray.filter((dog) => dog.age >= 3);

// Using the dogs array, write a function returning an array of all the dog names
export const getDogNames = (dogsArray) => dogsArray.map((dog) => dog.name);

// Using the dogs array, write a function returning the youngest dog
export const getYoungestDog = (dogsArray) => dogsArray.sort((a, b) => a.age - b.age)[0];

// Using the dogs array, write a function returning how many times each dog breed shows up in the array
export const getDogsAmountOfTimes = (dogsArray) =>
    dogsArray.reduce((acc, dog) => {
        const breed = dog.breed;
        return { ...acc, [breed]: (acc[breed] || 0) + 1 };
    }, {});

/*

 This repository is a React app spun up using Vite. You'll see an App.jsx file you can edit and make your own.
 Feel free to add any React components in the assets/components folder

 Display a random image for each breed that appears in the above array. Please use code - don't manually do this.

 Using the dog breed API

 Docs: https://dog.ceo/dog-api/documentation/breed

 API URL: https://dog.ceo/api/breed/{breed}/images/random

 */
