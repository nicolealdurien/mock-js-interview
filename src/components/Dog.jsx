/* 
 Completed: 2025-05-19
 Challenge from: https://www.youtube.com/watch?v=CU37IxzGsI0

 Display a random image for each breed that appears in dogs.js. Please use code - don't manually do this!
 
 The "breedCode" in the dog objects should help you here!

 You'll be using the dog breed API

 Docs: https://dog.ceo/dog-api/documentation/breed

 API URL: https://dog.ceo/api/breed/{dog breed goes here}/images/random
 */

import { useEffect, useState } from 'react';

const Dog = ({ breed }) => {
    const [source, setSource] = useState('');

    const getDogImage = async () => {
        let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        let json = await response.json();
        let { message } = json;
        setSource(message);
    };

    useEffect(() => {
        getDogImage();
    }, [breed]);

    return source ? (
        <li key={breed} style={{ listStyleType: 'none' }}>
            <img
                style={{ borderRadius: '15px', maxWidth: '250px', maxHeight: '250px' }}
                src={source}
                alt="image of dog"
            />
        </li>
    ) : (
        <p>No image available yet...</p>
    );
};

export default Dog;
