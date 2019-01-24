function Carte () {

	//this.carte = new Array();
  this.carte = new Array(
    new Array(1,1,1,1,1,1,1,1,1,1),
    new Array(1,0,2,0,0,0,0,0,0,1),
    new Array(1,0,0,1,1,1,1,1,0,1),
    new Array(1,0,0,0,0,0,0,0,0,1),
    new Array(1,0,0,0,3,0,2,0,0,1),
    new Array(1,0,3,0,0,0,0,0,0,1),
    new Array(1,0,0,0,0,0,1,0,0,1),
    new Array(1,0,1,0,3,0,1,0,0,1),
    new Array(1,0,0,0,2,0,0,0,0,1),
    new Array(1,1,1,1,1,1,1,1,1,1),
    );
	
	this.LARGEUR = 10;
  this.HAUTEUR = 10;
	this.nbObjectifs = 0;
  this.joueur = new Joueur(1,6);

  this.afficherJoueur = function (app) {
    //Placer le joueur
    let sprite = this.joueur.sprite;
    sprite.x = this.joueur.x * this.joueur.sprite.width;
    sprite.y = this.joueur.y * this.joueur.sprite.height;
    app.stage.addChild(this.joueur.sprite);
  }

	this.dessiner = function (app) {
    this.nbObjectifs = 0;
		for(var y = 0; y < this.LARGEUR; y++) {
	    for(var x = 0; x < this.HAUTEUR; x++) {
    
        if (this.carte[y][x] == MUR) {
	        let sprite = new PIXI.Sprite(PIXI.loader.resources["images/mur.png"].texture);
	        sprite.x = x * sprite.width;
	        sprite.y = y * sprite.height;
	        app.stage.addChild(sprite);
	      } else if (this.carte[y][x] == SOL) {
          let sprite = new PIXI.Sprite(PIXI.loader.resources["images/sol.png"].texture);
          sprite.x = x * sprite.width;
          sprite.y = y * sprite.height;
          app.stage.addChild(sprite);
        }
        else if (this.carte[y][x] == OBJECTIF) {
          let sprite = new PIXI.Sprite(PIXI.loader.resources["images/objectif.png"].texture);
          sprite.x = x * sprite.width;
          sprite.y = y * sprite.height;
          app.stage.addChild(sprite);
          this.nbObjectifs++;
        }
        else if (this.carte[y][x] == CAISSE) {
          let sprite = new PIXI.Sprite(PIXI.loader.resources["images/caisse.png"].texture);
          sprite.x = x * sprite.width;
          sprite.y = y * sprite.height;
          app.stage.addChild(sprite);
        }
        else if (this.carte[y][x] == CAISSE_OK) {
          let sprite = new PIXI.Sprite(PIXI.loader.resources["images/caisse_ok.png"].texture);
          sprite.x = x * sprite.width;
          sprite.y = y * sprite.height;
          app.stage.addChild(sprite);
        }
      }
      
      this.afficherJoueur(app);
    }
  }

  this.gagner = function() {
    return this.nbObjectifs == 0;
  }
  
  
}