const validarNome = (nome) => {
  return nome?.toString().length > 2;
}

console.log(validarNome(333));

const validarEmail = (email) => {
  emailStr = email?.toString();
  return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.');
}

const validarSenha = (senha) => {
  return senha?.toString().length > 3
}

const validarConfirmacaoSenha = (senha, confirmacao) => {
  return validarSenha(senha) && senha === confirmacao;
}

export {
  validacaoNome,
  validarEmail,
  validarSenha,
  validarConfirmacaoSenha
}