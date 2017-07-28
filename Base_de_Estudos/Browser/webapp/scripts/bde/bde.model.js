bde.model = ( function() {
	var initModule,
        livro,
        Livro,
        getLivro;

	initModule = function() {
		console.log( 'bde.model.initModule()' );

        livro = Livro( "Título 1" );

        console.log( "livro: " );
        console.log( livro );
	};


    Livro = function( titulo ) {
        var livro = {
            "titulo": titulo,
            "capitulos": []
        };


        livro.getTitulo = function() {
            return livro.titulo;
        };


        livro.setTitulo = function( titulo ) {
            console.log( 'livro.setTitulo' );

            livro.titulo = titulo;

            console.log( "livro: " );
            console.log( livro );
        };


        // FF: From Function
        livro.setTituloFF = function( getTituloF ) {
            console.log( 'livro.setTitulo' );

            livro.titulo = getTituloF();
        };

        return livro;
    };


    getLivro = function() {
        return livro;
    };


	return {
		initModule                  : initModule,
        getLivro                    : getLivro
    };
}() );
