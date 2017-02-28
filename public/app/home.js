define([
    'jquery',
    'helper/utils',
    'app_config',
    'helper/service',
    'text!templates/home.tpl.hbs'
], function ($, Utils, appConfig, Service, homeTpl) {
   function View() {
       this.init = function () {
           var fetchUsers = Service.get(Utils.getFullUrl('users'),{});

           fetchUsers.done(function (response) {
               Utils.render(appConfig.selector, homeTpl,{
                   users: response.data
               });
               if(appConfig.debug === true) {
                   console.log(response);
               }
           });
       }
   }
   return View;
});