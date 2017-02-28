define(['jquery','routes', 'app_config', 'app/invalid','helper/utils', 'text!templates/layout.tpl.hbs', 'router'],
    function ($, routes, appConfig, InvalidView, Utils, layoutTpl) {
    // All Configuration goes here.


    // Load the layout first.
    Utils.render(appConfig.layoutSelector, layoutTpl, {}).done(function () {
        Utils.routeHandler();
    });

    routes.map(function (route) {
        $.router.add(route.path, function(data) {
            require([route.view], function (View) {
                var view = new View();
                view.init();
            });
        });
        return this;
    });

    var invalidView = new InvalidView();

    $.router.addErrorHandler(function (url) {
        invalidView.show404(url);
    });

    // Go to the starting page.
    $.router.go(window.location.pathname);
});