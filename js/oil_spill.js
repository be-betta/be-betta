game.Enemy = me.Entity.extend({
	init: function (x, y, velocity) {
		this._super(me.Entity, "init", [x, y, {
			image : "oil",
			width : 153,
			height : 117
		}]);
		this.velx = velocity;
	},
  
	update: function (dt) {
		this._super(me.Entity, "update", [dt]);
		this.pos.x -= this.velx * dt / 1000;

		if (this.pos.x < -this.width) {
			me.game.world.removeChild(this, true);
			return false;
		}
		
		game.playScreen.checkIfLoss(this.pos.x, this.pos.y, this.height)
		
		return true;
	}
  });