import {useState, useEffect} from "react";

const dogs = [
    { name: 'Alfred', age: 7, breed: 'Pug', breedCode: 'pug' },
    { name: 'Zeke', age: 7, breed: 'Boxer', breedCode: 'boxer' },
    { name: 'Fish', age: 2, breed: 'Australian Shepherd', breedCode: 'australian/shepherd' },
    { name: 'Max', age: 2, breed: 'Boxer', breedCode: 'boxer' },
    { name: 'Wiley', age: 3, breed: 'Cardigan Corgi', breedCode: 'corgi/cardigan' },
    { name: 'Mickey', age: 4, breed: 'Cardigan Corgi', breedCode: 'corgi/cardigan' },
    { name: 'Squirrel', age: 1, breed: 'Boxer', breedCode: 'boxer' },
    { name: 'Beatrice', age: 5, breed: 'Pug', breedCode: 'pug' },
    { name: 'Eevee', age: 5, breed: 'Pembroke Welsh Corgi', breedCode: 'pembroke' },
];

const Dog = ({breedCode}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `https://dog.ceo/api/breed/${breedCode}/images/random`;
        fetch(url).then(data => data.json()).then((data) => {
            setData(data.message);
        });
    }, []);
    if (data) {
        return <img src={data} />;
    }
    return <div>Image loading...</div>;
};

function App() {
  return (
    <>
        <h1>
            Code Emily Mock Interview
        </h1>
        {dogs.map(dog => <Dog key={dog.breed} breedCode={dog.breedCode} />)}
    </>
  );
}

export default App;
