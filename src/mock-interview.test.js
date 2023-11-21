import dogs from './dogs.js';
import { getDogsThreeOrOlder, getDogNames, getYoungestDog, getDogsAmountOfTimes } from './mock-interview.js';

test('Gets dogs three or older', () => {
    const expectedArray = [
        { name: 'Alfred', age: 7, breed: 'Pug', breedCode: 'pug' },
        { name: 'Zeke', age: 7, breed: 'Boxer', breedCode: 'boxer' },
        {
            name: 'Wiley',
            age: 3,
            breed: 'Cardigan Corgi',
            breedCode: 'corgi/cardigan',
        },
        {
            name: 'Mickey',
            age: 4,
            breed: 'Cardigan Corgi',
            breedCode: 'corgi/cardigan',
        },
        { name: 'Beatrice', age: 5, breed: 'Pug', breedCode: 'pug' },
        {
            name: 'Eevee',
            age: 5,
            breed: 'Pembroke Welsh Corgi',
            breedCode: 'pembroke',
        },
    ];

    expect(getDogsThreeOrOlder(dogs)).toStrictEqual(expectedArray);
});

test('Gets dog names', () => {
    const expectedArray = ['Alfred', 'Zeke', 'Fish', 'Max', 'Wiley', 'Mickey', 'Squirrel', 'Beatrice', 'Eevee'];

    expect(getDogNames(dogs)).toStrictEqual(expectedArray);
});

test('Gets youngest dog', () => {
    const expectedObject = { name: 'Squirrel', age: 1, breed: 'Boxer', breedCode: 'boxer' };
    expect(getYoungestDog(dogs)).toStrictEqual(expectedObject);
});

test('Gets dog breed amounts', () => {
    const expectedObject = {
        Boxer: 3,
        'Australian Shepherd': 1,
        'Cardigan Corgi': 2,
        Pug: 2,
        'Pembroke Welsh Corgi': 1,
    };

    expect(getDogsAmountOfTimes(dogs)).toStrictEqual(expectedObject);
});
