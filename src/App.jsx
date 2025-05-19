import AllDogs from './components/AllDogs.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/dogs" element={<AllDogs />} />
                </Routes>
                <div style={{ paddingLeft: '40px' }}>
                    <h1>React Mock Technical Challenges</h1>
                    <Link to={'/dogs'}>2025-05-19: CodeEmily</Link>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
