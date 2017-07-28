/*
 * É importante frisar que a estrutura do modelo não necessariamente
 * corresponde à estrutura do shell.
 *
 */

var bde = ( function() {
	var initModule;

	initModule = function() {
		console.log( 'bde.initModule()' );

		bde.model.initModule();
		bde.shell.initModule();
	};


	return {
		initModule                  : initModule
    };
}() );
