const RegistrationForm = () => (
  <form className="register-form">
    <h2>Regístrate</h2>
    <label htmlFor="name">Nombre</label>
    <input type="text" id="name" placeholder="Escribe tu nombre" />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="Escribe tu email" />
    <label htmlFor="password">Contraseña</label>
    <input type="password" id="password" placeholder="Escribe tu contraseña" />
    <label htmlFor="confirm-password">Confirmar contraseña</label>
    <input type="password" id="confirm-password" placeholder="Confirma contraseña" />
    <button type="submit" className="register-btn">Regístrate</button>
    <div className="centered-text">O regístrate con Google o Facebook</div>
    <div className="social-buttons">
      <button type="button" className="social-btn google-btn">Google</button>
      <button type="button" className="social-btn facebook-btn">Facebook</button>
    </div>
    <div className="footer-text">
      <p>Already have an account?</p>
      <button type="button" className="social-btn google-btn footer-btn">Login with Google</button>
    </div>
  </form>
);

export default RegistrationForm;
