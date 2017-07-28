bde.shell.modulo1 = ( function() {
	var initModule,
		buildHtmlStructure,
		addEventListeners,
		getHtml,
		bindViewToModel,
        elementos,
        initElementos;

	initModule = function() {
		console.log( 'bde.shell.modulo1.initModule' );

        elementos = {};
	};


	buildHtmlStructure = function() {
		console.log( 'bde.shell.modulo1.buildHtmlStructure' );

        var divModulo1;

		divModulo1 = document.createElement( "div" );
		divModulo1.setAttribute( "id", "modulo1" );
		$( divModulo1 ).addClass( "row" );

		divModulo1.innerHTML = getHtml();
		document.getElementById( 'modulos' )
				.appendChild( divModulo1 );

        elementos.divModulo1 = divModulo1;
	};


    initElementos = function() {
        console.log( 'bde.shell.modulo1.initElementos' );

        elementos.tituloLivro = bde.util_browser.ElementInputText(
                "titulo_livro" );
    };


	addEventListeners = function() {
		console.log( 'bde.shell.modulo1.addEventListeners' );
	};


	bindViewToModel = function() {
		console.log( 'bde.shell.modulo1.bindViewToModel' );

        var livro;
        livro = bde.model.getLivro();
        elementos.tituloLivro.bindToModel( livro.setTituloFF );
	};


	getHtml = function() {
		console.log( 'bde.shell.modulo1.getHtml()' );

		var html = [
				'<label for"titulo_livro">Título do livro:</label>',
				'<input type="text" id="titulo_livro" size="48">',
                '<br>',
                '<section id="lista_capitulos">',
                '  <h3>Lista de Capítulos:</h3>',
                '  <table>',
                '    <thead>',
                '      <tr>',
                '        <th>Nome do Capítulo</th>',
                '        <th>Estado da Leitura</th>',
                '      </tr>',
                '    </thead>',
                '    <tbody>',
                '      <tr>',
                '        <td>',
                '          <input type="text" size="48"></input>',
                '        </td>',
                '        <td>',
                '          <input type="radio" name="estado_leitura" value="nao_lido" checked>não lido</input>',
                '          <input type="radio" name="estado_leitura" value="iniciado">iniciado</input>',
                '          <input type="radio" name="estado_leitura" value="completado">completado</input>',
                '        </td>',
                '      </tr>',
                '    </tbody>',
                '  </table>',
                '</section>'
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
