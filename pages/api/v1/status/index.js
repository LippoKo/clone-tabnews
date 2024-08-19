function status(request, response) {
  response
    .status(200)
    .json({ chave: "Minha moto vai ficar bem! Em nome de Jesus! AMEM!" });
}

export default status;
