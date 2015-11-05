(function() {
	var app = angular.module('gallery', []);
	app.controller('galleryControl', function () {
      this.genBrick = function () {
          var height = ~~(Math.random() * 500) + 100;
          var id = ~~(Math.random() * 10000);
          return {
              src: 'http://lorempixel.com/g/260/' + height + '/?' + id,
              caption: 'a caption'
          };
      };

      this.bricks = [
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick(),
          this.genBrick()
      ];
  });
	
})();