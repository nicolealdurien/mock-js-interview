import { useEffect, useState } from 'react';

const Dog = ({ breedCode }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const url = `https://dog.ceo/api/breed/${breedCode}/images/random`;
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                setData(data.message);
            });
    }, []);
    if (data) {
        return <img src={data} />;
    }
    return <div>Image loading...</div>;
};

export default Dog;
