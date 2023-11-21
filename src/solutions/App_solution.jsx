import dogs from '../dogs.js';
import Dog from './components/Dog.jsx';

function App() {
    return (
        <>
            <h1>Code Emily Mock Interview</h1>
            {dogs.map((dog) => (
                <Dog key={dog.name} breedCode={dog.breedCode} />
            ))}
        </>
    );
}

export default App;
