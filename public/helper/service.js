define(['jquery'], function ($) {
   function Service() {
       this.get = function (url, data) {
           return Request(url, 'GET', data);
       };

       this.post = function (url, data) {
           return Request(url, 'POST', data);
       };

       this.put = function (url, data) {
           return Request(url, 'PUT', data);
       };
       
       this.patch = function (url, data) {
           return Request(url, 'PATCH', data);
       };

       this.delete = function (url, data) {
           return Request(url, 'DELETE', data);
       };
       
       function Request(url, method, data) {
           var q = $.Deferred();
           $.ajax({
               url: url,
               data: data,
               method: method
           }).done(function (response) {
               if(response && response.statusCode == 200) {
                   q.resolve(response);
                   return;
               }
               if(response && response.statusCode != 200) {
                   q.reject(response.message);
                   return;
               }
               q.reject('Oops. Something went wrong.');

           }).fail(function () {
               q.reject('Oops. Something went wrong.');
           });
           return q.promise();
       }
   }
   return new Service();
});