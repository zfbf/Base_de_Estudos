/*
 * É importante frisar que a estrutura do modelo não necessariamente
 * corresponde à estrutura do shell.
 *
 */

bde.shell = ( function() {
	var initModule,
		buildHtmlStructure,
		addEventListeners,
		bindViewToModel;

	initModule = function() {
		console.log( 'bde.shell.initModule()' );

		bde.shell.modulo1.initModule();
		bde.shell.modulo2.initModule();

        buildHtmlStructure();
        initElementos();
		addEventListeners();
		bindViewToModel();
	};


    buildHtmlStructure = function() {
		console.log( 'bde.shell.buildHtmlStructure' );

		bde.shell.modulo1.buildHtmlStructure();
		bde.shell.modulo2.buildHtmlStructure();
	};


    initElementos = function() {
		console.log( 'bde.shell.initElementos();' );

		bde.shell.modulo1.initElementos();
		bde.shell.modulo2.initElementos();
	};


	addEventListeners = function() {
		console.log( 'bde.shell.addEventListeners' );

		bde.shell.modulo1.addEventListeners();
		bde.shell.modulo2.addEventListeners();
	};


	bindViewToModel = function() {
		console.log( 'bde.shell.bindViewToModel' );

		bde.shell.modulo1.bindViewToModel();
		bde.shell.modulo2.bindViewToModel();
	};


	return {
		initModule                  : initModule
    };
}() );
