module Ciebit
{
    export class Hermes
    {
        private static contador:number = 0;
        private objId:string;
        private unicos:Object = {};
        private solicitacoes:Object = {};
        private referencias:Object = {};

        public constructor() {
            this.objId = 'cb-hermes-'+ Hermes.contador++;
        }

        /*
        * Método: Atrela uma ação a uma função
        * @recebe:
        *  funcao - Função a ser executada quando ocorrer a ação
        *  acao - Indentifiação da ação
        *  ref - Referencia da função para exclusão posterior
        *  unica - Informa se a função deve ser chamada apenas uma vez
        * @retorna: Nada
        * @efeito: Nada
        */
        public aviseMe ( acao:string, funcao:Function, ref:string = undefined, unica:boolean = undefined ):number
        {
            //Criando item caso não exista
            if( !( acao in this.solicitacoes ) )
            {
                this.solicitacoes[ acao ] = [];
                this.unicos[ acao ] = [];
            }

            //Adicinando função
            let chave = this.solicitacoes[ acao ].push( funcao );

            //Adicionando referencia caso haja
            if( ref ) this.referencias[ ref ] = { 'acao': acao, 'chave': chave-- };

            //Caso deva ser chamado uma única vez
            if( unica ) this.unicos[ acao ].push( chave );

            return chave;
        }

        /**
        * Método: Executar funções que tenham solicitado avisos
        * ----
        * @recebe: acao - Indentificação da ação
        * @retorna: o próprio
        * @efeito: chama Funções
        */
        public avise( acao:string, ...args ):this
        {
            // Verifica se existe alguma função para o aviso
            if( !this.solicitacoes[ acao ] ) return;

            // Percorrendo todas as solicitações
            for( let chave in this.solicitacoes[ acao ] )
            {
                // Pegando os argumentos com excessão do primeiro
                //var args = Array.prototype.slice.call( arguments, 1 );

                // Chamando a função com os argumentos passados
                this.solicitacoes[ acao ][ chave ].apply( this, args );

                // Verificando se só deseja uma unica chamada
                let i = this.unicos[ acao ].indexOf( chave );
                if( i >= 0 )
                {
                    // Removendo função para evitar ser
                    // chamada novamente
                    delete this.solicitacoes[ acao ][ chave ];
                    delete this.unicos[ i ];
                }
            }

            return this;
        }

        /**
        * Remove a solicitação de aviso de uma funcao
        * ----
        * @recebe: ref - Referencia passada no aviso
        * @retorna: o próprio
        * @efeito: remove elementos internos
        */
        public esquecaMe ( ref:string ):this
        {
            let acao, chave;

            if( !this.referencias[ ref ] ) return this;

            acao  = this.referencias[ ref ].acao;
            chave = this.referencias[ ref ].chave;

            delete this.solicitacoes[ acao ][ chave ];
            delete this.referencias[ ref ];
        }
    }
}
