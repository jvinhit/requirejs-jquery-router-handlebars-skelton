define([
    'jquery',
    'helper/utils',
    'app_config',
    'text!templates/test.tpl.hbs'
], function ($, Utils, appConfig, testTpl) {
    function View() {
        this.init = function () {
            Utils.render(appConfig.selector, testTpl,{}).done(function () {

            });
        }
    }
    return View;
});