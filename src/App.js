// import logo from './logo.jpeg';
import Navbar from "./components/Navbar/Navbar";
import AlbumList from "./components/AlbumList/AlbumList";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AlbumList/>
        </div>
    );
}

export default App;
