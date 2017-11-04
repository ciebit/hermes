define(["require"], function (require) {
    "use strict";
    var Hermes = (function () {
        function Hermes() {
            this.unicos = {};
            this.solicitacoes = {};
            this.referencias = {};
            this.objId = 'cb-hermes-' + Hermes.contador++;
        }
        Hermes.prototype.aviseMe = function (acao, funcao, ref, unica) {
            if (ref === void 0) { ref = undefined; }
            if (unica === void 0) { unica = undefined; }
            if (!(acao in this.solicitacoes)) {
                this.solicitacoes[acao] = [];
                this.unicos[acao] = [];
            }
            var chave = this.solicitacoes[acao].push(funcao);
            if (ref)
                this.referencias[ref] = { 'acao': acao, 'chave': chave-- };
            if (unica)
                this.unicos[acao].push(chave);
            return chave;
        };
        Hermes.prototype.avise = function (acao) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!this.solicitacoes[acao])
                return;
            for (var chave in this.solicitacoes[acao]) {
                this.solicitacoes[acao][chave].apply(this, args);
                var i = this.unicos[acao].indexOf(chave);
                if (i >= 0) {
                    delete this.solicitacoes[acao][chave];
                    delete this.unicos[i];
                }
            }
            return this;
        };
        Hermes.prototype.esquecaMe = function (ref) {
            var acao, chave;
            if (!this.referencias[ref])
                return this;
            acao = this.referencias[ref].acao;
            chave = this.referencias[ref].chave;
            delete this.solicitacoes[acao][chave];
            delete this.referencias[ref];
        };
        Hermes.contador = 0;
        return Hermes;
    }());
    return Hermes;
});
