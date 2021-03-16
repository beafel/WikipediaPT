$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 2,
      "value": "#  Funcionalidade: Consulta"
    },
    {
      "line": 3,
      "value": "#    Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 4,
      "value": "#      Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 5,
      "value": "#      Quando pesquiso por \"Ovo de Páscoa\""
    },
    {
      "line": 6,
      "value": "#      Entao exibe a expressao \"Ovo de Páscoa\" no titulo da aba"
    }
  ],
  "line": 9,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1194721700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "exibe a expressao \"Ovo de Páscoa\" no titulo da aba",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 2107982000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 1551486200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaAba(String)"
});
formatter.result({
  "duration": 26231100,
  "status": "passed"
});
formatter.after({
  "duration": 707774700,
  "status": "passed"
});
});