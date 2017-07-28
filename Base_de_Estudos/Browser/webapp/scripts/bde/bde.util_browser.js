bde.util_browser = ( function() {
	var ElementInputText,
        ElementSpanText;

    ElementInputText = function( id ) {
        var element,
            getDomElement,
            getValue,
            setValue,
            bindToModel;

        element = document.getElementById( id );

        getDomElement = function() {
            return element;
        };


        getValue = function() {
            return element.value;
        };


        setValue = function( value ) {
            element.value = value;
        };


        bindToModel = function( setModelFF ) {
            console.log( 'ElementInputText.bindToModel' );

            $( element ).change(
                function() {
                    setModelFF( getValue );
                }
            );
        };


        return {
            getDomElement           : getDomElement,
            getValue                : getValue,
            setValue                : setValue,
            bindToModel             : bindToModel
        };
    };


    ElementSpanText = function( id ) {
        var element,
            getDomElement,
            getValue,
            setValue;

        element = document.getElementById( id );

        getDomElement = function() {
            return element;
        };


        getValue = function() {
            return element.value;
        };


        setValue = function( value ) {
            element.value = value;
        };


        return {
            getDomElement           : getDomElement,
            getValue                : getValue,
            setValue                : setValue
        };
    };


    return {
        ElementInputText           : ElementInputText,
        ElementSpanText             : ElementSpanText
    };

}() );
