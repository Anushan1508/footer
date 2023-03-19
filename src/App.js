import './App.css';
import Footer from "./components/footer/Footer";
import Contact from "./pages/contactus/Contact";
import Service from "./pages/service/Service";
import AboutUs from "./pages/aboutus/AboutUs";


function App() {
    return (
        <div className="App">
            {/*<Contact/>*/}
            {/*<Service/>*/}
            <AboutUs/>
            <Footer/>
        </div>
    );
}

export default App;
