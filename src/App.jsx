
import React from 'react'
import Service from './components/service/Service'
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
       <Service/>
      </main>
      <Footer />
    </div>
  );
};


export default App
