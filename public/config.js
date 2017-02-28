requirejs.config({
    baseUrl: '/',
    paths: {
        jquery: 'components/jquery/dist/jquery.min',
        materialize: 'components/materialize/dist/js/materialize.min',
        router: 'components/router/router',
        handlebars: 'components/handlebars/handlebars.amd.min',
        text: 'components/require/text'
    },
    shim: {
        router: {
            deps: ['jquery']
        },
        materialize : {
            deps: ['jquery']
        }
    },
});

// Go.
requirejs(['main']);