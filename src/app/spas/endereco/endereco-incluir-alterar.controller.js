angular.module("hackaton-stefanini").controller("EnderecoIncluirAlterarController", EnderecoIncluirAlterarController);
EnderecoIncluirAlterarController.$inject = [
  "EnderecoService"
];



function EnderecoIncluirAlterarController(
  EnderecoService
) {

  /**ATRIBUTOS DA TELA */
  const vm = this;

  vm.service = EnderecoService;

  vm.urlEndereco = "http://localhost:8080/treinamento/api/enderecos/";

  /**METODOS DE INICIALIZACAO */
  vm.init = function () {

    vm.tituloTela = "Cadastrar Endereco";
    vm.acao = "Cadastrar";

  };

  vm.listaUF = [
    { "id": "RO", "desc": "RO" },
    { "id": "AC", "desc": "AC" },
    { "id": "AM", "desc": "AM" },
    { "id": "RR", "desc": "RR" },
    { "id": "PA", "desc": "PA" },
    { "id": "AP", "desc": "AP" },
    { "id": "TO", "desc": "TO" },
    { "id": "MA", "desc": "MA" },
    { "id": "PI", "desc": "PI" },
    { "id": "CE", "desc": "CE" },
    { "id": "RN", "desc": "RN" },
    { "id": "PB", "desc": "PB" },
    { "id": "PE", "desc": "PE" },
    { "id": "AL", "desc": "AL" },
    { "id": "SE", "desc": "SE" },
    { "id": "BA", "desc": "BA" },
    { "id": "MG", "desc": "MG" },
    { "id": "ES", "desc": "ES" },
    { "id": "RJ", "desc": "RJ" },
    { "id": "SP", "desc": "SP" },
    { "id": "PR", "desc": "PR" },
    { "id": "SC", "desc": "SC" },
    { "id": "RS", "desc": "RS" },
    { "id": "MS", "desc": "MS" },
    { "id": "MT", "desc": "MT" },
    { "id": "GO", "desc": "GO" },
    { "id": "DF", "desc": "DF" }
  ];

}
