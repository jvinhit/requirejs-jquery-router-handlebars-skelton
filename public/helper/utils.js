define(['jquery','handlebars','app_config'], function ($, Handlebars, appConfig) {
   function Utils() {
       this.render = function(selector, template, data) {
           var deferred = $.Deferred();
           try {
               var html = Handlebars.compile(template)(data);
               $(selector).html(html);
               deferred.resolve();
           }
           catch (err) {
               deferred.reject(err)
           }
           return deferred.promise();
       };
       this.routeHandler = function () {
           var self = this;
           $('body').on('click', '.route-handler', function (e) {
               e.preventDefault();
               $(appConfig.selector).html(self.getLoader());
               $.router.go($(this).prop('href'));
           });
       };

       this.getFullUrl = function (url) {
           return appConfig.baseUrl + appConfig.apiRoot + url
       };
       
       this.getLoader = function (type) {
           return '<h4 class="center">Loading...</h4>'
       }
   }
   return new Utils();
});