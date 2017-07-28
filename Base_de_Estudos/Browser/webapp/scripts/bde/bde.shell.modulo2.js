bde.shell.modulo2 = ( function() {
	var initModule,
		buildHtmlStructure,
		addEventListeners,
		getHtml,
		bindViewToModel,
        elementos,
        initElementos;

	initModule = function() {
		console.log( 'bde.shell.modulo2.initModule()' );

        elementos = {};
	};


	buildHtmlStructure = function() {
		console.log( 'bde.shell.modulo2.buildHtmlStructure' );

        var divModulo2;

		divModulo2 = document.createElement( "div" );
		divModulo2.setAttribute( "id", "modulo2" );
		$( divModulo2 ).addClass( "row" );

		divModulo2.innerHTML = getHtml();
		document.getElementById( 'modulos' )
				.appendChild( divModulo2 );

        elementos.divModulo2 = divModulo2;
	};


    initElementos = function() {
        console.log( 'bde.shell.modulo2.initElementos' );

        elementos.tituloLivro = bde.util_browser.ElementSpanText(
                "titulo_livro_c1" );
    };


	addEventListeners = function() {
		console.log( 'bde.shell.modulo2.addEventListeners' );
	};


	bindViewToModel = function() {
		console.log( 'bde.shell.modulo2.bindViewToModel' );
	};


	getHtml = function() {
		console.log( 'bde.shell.modulo2.getHtml()' );

		var html = [
				'<p>Nome do livro: ',
				'<span id="titulo_livro_c1">Teste</span>',
				'</p>',
		];

		return html.join( '\n' );
	};


	return {
		initModule                  : initModule,
		buildHtmlStructure			: buildHtmlStructure,
        initElementos               : initElementos,
		addEventListeners			: addEventListeners,
		bindViewToModel				: bindViewToModel
    };
}() );
