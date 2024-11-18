class CredencialesIncorrectasError extends Error {
  constructor() {
    super("Credenciales ingresadas incorrectas");
    this.status = 402;
  }
}

export default CredencialesIncorrectasError;
