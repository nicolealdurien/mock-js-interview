import Dog from './Dog.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import dogs from '../dogs.js';

const AllDogs = () => {
    const [breedCodes, setBreedCodes] = useState([]);

    const getDogBreedCodes = () => {
        let breedCodes = {};

        dogs.forEach((dog) => {
            if (!(dog.breedCode in breedCodes)) {
                breedCodes[dog.breedCode] = 1;
            }
        });

        return breedCodes;
    };

    useEffect(() => {
        let codes = getDogBreedCodes();
        setBreedCodes(Object.keys(codes));
    }, []);

    return (
        <div style={{ padding: '0px 40px' }}>
            <Link to={'/'}>Go Back Home</Link>
            <h1>Code Emily Mock Interview</h1>
            <p>Instructions: Set a timer for 45 minutes and complete the following JS/React problems.</p>
            <p>
                Start with the 4 JavaScript questions in mock-interview.js. Update the test file in
                mock-interview.test.js, run it, and confirm the tests are passing. You can run the tests by running "npm
                i && npm run test".
            </p>
            <p>
                After completing the JS problems, solve the React problem. This repository is a React app spun up using
                Vite. You'll see an App.jsx file you can edit and make your own.
            </p>

            <p>
                Display a random image for each breed that appears in the above array. Please use code - don't manually
                do this! The "breedCode" in the dog objects should help you here! You'll be using the following dog
                breed API:
            </p>

            <p>Docs: https://dog.ceo/dog-api/documentation/breed</p>

            <p>API URL: https://dog.ceo/api/breed/'dog breed goes here'/images/random</p>
            {breedCodes &&
                breedCodes.map((code) => {
                    return (
                        <ul>
                            <Dog breed={code} />
                        </ul>
                    );
                })}
        </div>
    );
};

export default AllDogs;
