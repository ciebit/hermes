# @ciebit/hermes

Módulo comunicador de eventos.

## Instalação

## Browser

Os módulos Ciebit foram projetos para trabalhar com o [RequireJs](http://requirejs.org/), para usar basta passar como dependência, assim:

```
#!javascript
require(["@ciebit/hermes"], function(hermes){
    // Utilizar aqui
});
```

E adicionar nas configurações:

```
#!javascript
require.config({
    paths: {
        "@ciebit/hermes": "//js.ciebit.com/hermes/v3.0.0.js"
    }
});
```

## Via NPM

Para embutir no projeto ele pode ser baixando através do comando abaixo:

```
#!shell
npm install @ciebit/hermes
```

## Utilização

Você poderá usar o Hermes para armazenar solicitações funções de callback. Exemplo:

```
#!typescript
import { Hermes } from "@ciebit/hermes";

let HermesObj:Hermes = new Hermes;

/*
Aqui é passando como primeiro parâmetro um identificador do evento
e no segundo uma função de callback
*/
HermesObj.aviseMe('ativado', function(){ console.log('Fui ativado') });


/*
A função informada acima será chamada com o comando abaixo
*/
HermesObj.avise('ativado');
```
