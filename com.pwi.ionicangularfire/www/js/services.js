angular.module('starter.services', [])

.factory('Lists', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lists = [{
    id: 0,
    name: 'Doom 4',
    price: '$49.99',
    description: 'The game is played entirely from a first-person perspective, with players taking the role of an unnamed marine, as he battles demonic forces from Hell that have been unleashed by the Union Aerospace Corporation on a future-set colonized planet Mars.',
    face: 'img/Doom.jpg'
  }, {
    id: 1,
    name: 'Mario 3D World',
    price: '$60',
    description: 'The game follows a similar play style to Super Mario 3D Land, which combines the free-roaming gameplay of 3D Mario titles with the mechanics of 2D side-scrolling platforming games in the series, going so far as to include a flagpole and timer on every level.',
    face: 'img/Mario.jpg'
  }, {
    id: 2,
    name: ' Super Metroid',
    price: '$46.99',
    description: 'Super Metroid is a direct sequel to Metroid II: Return of Samus (1991). The player controls bounty hunter Samus Aran as she attempts to retrieve a Metroid larva stolen by the Space Pirate leader Ridley. The gameplay focuses on exploration, with the player searching for power-ups that are used to reach previously inaccessible areas. It introduces new concepts to the series, such as the inventory screen, an automapping facility, and the ability to fire in all directions.',
    face: 'img/metroid.jpg'
  }];

  return {
    all: function() {
      return lists;
    },
    remove: function(list) {
      lists.splice(lists.indexOf(list), 1);
    },
    get: function(listId) {
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === parseInt(listId)) {
          return lists[i];
        }
      }
      return null;
    }
  };
});
