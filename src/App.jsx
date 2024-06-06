import RegistrationForm from './components/RegistrationForm.jsx';

const App = () => (
  <div>
    <header>
      <img src="/logo.png" alt="Rulo Logo" className="logo" />
      <button className="login-btn">Ingresa</button>
    </header>
    <main>
      <h1>Bienvenido a Rulo</h1>
      <p>Descubre y organiza partidos de pádel, conéctate con otros jugadores de tu nivel, sigue tu nivel y mejora</p>
      <RegistrationForm />
    </main>
    <footer>
      <div className="footer-links">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="social-icons">
        <a href="#"><img src="/ig.png" alt="Instagram" /></a>
        <a href="#"><img src="/twitter.jpeg" alt="Twitter" /></a>
      </div>
    </footer>
  </div>
);

export default App;
