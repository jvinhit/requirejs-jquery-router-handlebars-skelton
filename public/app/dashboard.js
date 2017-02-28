define([
    'jquery',
    'helper/utils',
    'app_config',
    'text!templates/dashboard.tpl.hbs'
], function ($, Utils, appConfig, dashboardTpl) {
   function View() {
       this.init = function () {
           Utils.render(appConfig.selector, dashboardTpl,{});
       }
   }
   return View;
});