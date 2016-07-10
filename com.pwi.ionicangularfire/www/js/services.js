angular.module('starter.services', [])

.factory('Lists', function ($firebaseArray) { 
  var lists = this;
  lists.catalog = [];

  return {
    get: function(id) {
      for (var i = 0; i < lists.catalog.length; i++) {
        if (lists.catalog[i].id === parseInt(id)) {
          return lists.catalog[i];
        }
      }
      return null;
    }
    // get: function(id) {
    //   return $firebaseObject(ref.child(id));
    // }
  };
});
