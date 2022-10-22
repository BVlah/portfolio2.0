import './App.css';

import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
