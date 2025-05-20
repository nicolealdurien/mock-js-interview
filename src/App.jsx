import AllDogs from './components/AllDogs.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import UserTable from './components/UserTable.jsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/users" element={<UserTable />} />
                    <Route path="/dogs" element={<AllDogs />} />
                </Routes>
                <div style={{ paddingLeft: '40px' }}>
                    <h1>React Mock Technical Challenges</h1>
                    <ul>
                        <li>
                            <Link to={'/dogs'}>2025-05-16 (refactored 5/19): CodeEmily</Link>
                        </li>
                        <li>
                            <Link to={'/users'}>2025-05-18 (refactored 5/19): Ben Awad/Clément Mihailescu</Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
