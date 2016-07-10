angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ListsCtrl',function ($firebaseArray) {
  var lists = this;
  lists.catalog = [];  
  var ref = firebase.database().ref().child('games'); //database() porque la base de datos ya existe, pero sino, seria database('http//:....')
  //.ref() esto devuelve un objeto con sus herramientas, child es una herramienta el cual le va a dar games de la bd.
  $firebaseArray(ref).$loaded().then(function (results){
      lists.catalog = results;
    },function(error){
      console.error(error);
      alert(error);
    });

})

.controller('ListDetailCtrl', function ($stateParams, Lists) {
  var lists = this;
 lists = Lists.get($stateParams.id);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
