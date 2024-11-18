class UsuariosNoEncontradosError extends Error {
  constructor() {
    super("No fue encontrado ningún usuario en la base de datos");
  }
}

export default UsuariosNoEncontradosError;
