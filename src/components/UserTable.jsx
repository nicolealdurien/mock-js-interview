import { Link } from 'react-router';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [flattenedLocations, setFlattenedLocations] = useState([]);

    const getUsers = async () => {
        let response = await fetch('https://randomuser.me/api/?results=20');
        let json = await response.json();
        let data = json;
        setUsers(data.results);
    };

    const getFlattenedLocations = (people) => {
        let locations = [];

        people.forEach((person) => {
            locations.push({
                name: `${person.name.first} ${person.name.last}`,
                location: `${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.street.post_code} ${person.location.country}.`,
            });
        });
        console.log(locations);
        return null;
    };

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (users) getFlattenedLocations(users);
    }, [users]);

    console.log('users', users);
    return (
        <div style={{ padding: '0px 40px' }}>
            <Link to={'/'}>Go Back Home</Link>
            <h1>Ben Awad/Clément Mihailescu Mock Interview</h1>
            <p>
                See it on{' '}
                <a href="https://www.youtube.com/watch?v=6s0OVdoo4Q4" target="_blank">
                    YouTube
                </a>
            </p>
            <p>
                Instructions: Fetch data from a given URL and create a table with flattened location data displayed for
                each user.
            </p>
            <p>
                URL:{' '}
                <a href="https://randomuser.me/api/?results=20" target="_blank">
                    https://randomuser.me/api/?results=20
                </a>
            </p>
        </div>
    );
};

export default UserTable;
