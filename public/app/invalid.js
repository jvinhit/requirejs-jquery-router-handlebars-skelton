define(['jquery','helper/utils','app_config', 'text!templates/page404.hbs'],
function ($, Utils, appConfig, page404Tpl) {
    function View() {
        this.show404 = function(url) {
            Utils.render(appConfig.selector, page404Tpl, {
                url: url
            }).fail(function (err) {
                appConfig.debug === true && console.log(err);
            });
        }
    }
    return View;
});