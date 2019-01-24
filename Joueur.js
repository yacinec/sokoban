function Joueur(x, y) {
	// total de this.carte6 cases
	this.x = x;
	this.y = y;
	this.sprite = new PIXI.Sprite(PIXI.loader.resources["images/personnagebas.png"].texture);
	this.direction = BAS;
	
	this.deplacer = function (direction, carte) {
		if(direction == HAUT) {
			this.sprite = new PIXI.Sprite(PIXI.loader.resources["images/personnagehaut.png"].texture);
			if( this.y - 1 < 0 || carte[this.y - 1][this.x] == MUR){
				return ;
			}

			if( carte[this.y - 1][this.x] == CAISSE || carte[this.y - 1][this.x] == CAISSE_OK) {
				if (carte[this.y-2][this.x] != CAISSE && carte[this.y-2][this.x] != CAISSE_OK && carte[this.y-2][this.x] != MUR && this.y-2 >= 0) {
					if(carte[this.y-1][this.x] == CAISSE_OK) {
						carte[this.y-1][this.x] = OBJECTIF;
					} else {
						carte[this.y-1][this.x] = SOL;
					}

					if(carte[this.y-2][this.x] == OBJECTIF) {
						carte[this.y-2][this.x] = CAISSE_OK;
					}else {
						carte[this.y-2][this.x] = CAISSE;
					}
					
					this.y--;
				}
			} else {
				this.y--;
			}
		} else if (direction == BAS) {
			this.sprite = new PIXI.Sprite(PIXI.loader.resources["images/personnagebas.png"].texture);
			if( this.y + 1 > 10 || carte[this.y + 1][this.x] == MUR){
				return ;
			}

			if( carte[this.y + 1][this.x] == CAISSE || carte[this.y + 1][this.x] == CAISSE_OK) {
				if (carte[this.y+2][this.x] != CAISSE && carte[this.y+2][this.x] != CAISSE_OK && carte[this.y+2][this.x] != MUR && this.y+2 <= 10) {
					if(carte[this.y+1][this.x] == CAISSE_OK) {
						carte[this.y+1][this.x] = OBJECTIF;
					} else {
						carte[this.y+1][this.x] = SOL;
					}

					if(carte[this.y+2][this.x] == OBJECTIF) {
						carte[this.y+2][this.x] = CAISSE_OK;
					}else {
						carte[this.y+2][this.x] = CAISSE;
					}
					this.y++;
				}
			} else {
				this.y++;
			}
		} else if (direction == GAUCHE) {
			this.sprite = new PIXI.Sprite(PIXI.loader.resources["images/personnagegauche.png"].texture);
			if( this.x - 1 < 0 || carte[this.y][this.x-1] == MUR){
				return ;
			}

			if( carte[this.y][this.x - 1] == CAISSE || carte[this.y][this.x-1] == CAISSE_OK) {
				if (carte[this.y][this.x-2] != CAISSE && carte[this.y][this.x-2] != CAISSE_OK && carte[this.y][this.x-2] != MUR && this.x-2 >= 0) {
					if(carte[this.y][this.x-1] == CAISSE_OK) {
						carte[this.y][this.x-1] = OBJECTIF;
					} else {
						carte[this.y][this.x-1] = SOL;
					}

					if(carte[this.y][this.x-2] == OBJECTIF) {
						carte[this.y][this.x-2] = CAISSE_OK;
					}else {
						carte[this.y][this.x-2] = CAISSE;
					}
					this.x--;
				}
			} else {
				this.x--;
			}
		} else if (direction == DROITE) {
			this.sprite = new PIXI.Sprite(PIXI.loader.resources["images/personnagedroite.png"].texture);
			if( this.x + 1 > 10 || carte[this.y][this.x + 1] == MUR){
				return ;
			}

			if( carte[this.y][this.x + 1] == CAISSE || carte[this.y][this.x+1] == CAISSE_OK) {
				if (carte[this.y][this.x+2] != CAISSE && carte[this.y][this.x+2] != CAISSE_OK && carte[this.y][this.x+2] != MUR && this.x+2 <= 10) {
					if(carte[this.y][this.x+1] == CAISSE_OK) {
						carte[this.y][this.x+1] = OBJECTIF;
					} else {
						carte[this.y][this.x+1] = SOL;
					}

					if(carte[this.y][this.x+2] == OBJECTIF) {
						carte[this.y][this.x+2] = CAISSE_OK;
					}else {
						carte[this.y][this.x+2] = CAISSE;
					}
					this.x++;
				}
			} else {
				this.x++;
			}
		}
	}
}