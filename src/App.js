import './App.css';
import Footer from "./components/footer/Footer";
import Contact from "./pages/contactus/Contact";
import Service from "./pages/service/Service";


function App() {
    return (
        <div className="App">
            <Contact/>
            {/*<Service/>*/}
            <Footer/>
        </div>
    );
}

export default App;
