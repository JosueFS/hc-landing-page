import logo300 from './assets/logo.png';
import hero from './assets/alexios2.png';


import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/app.css';
import Form from './components/Form';

function App() {
  

  return (
    <>
      <main>
        <img className="logo" src={logo300} alt="logo" />
        <img className="hero" src={hero} alt="logo" />
        <h2>Eles venceram 10mil, e agora querem uma vaga!</h2>
      </main>

      <Form />

      <Footer />
    </>
  );
}

export default App;
