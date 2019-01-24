  let type = "WebGL"
  if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
  }

  const BAS = 0;
  const HAUT = 1;
  const GAUCHE = 2;
  const DROITE = 3;

  
  const SOL = 0;
  const MUR = 1;
  this. OBJECTIF = 2;
  const CAISSE = 3;
  const CAISSE_OK = 4;

	let app = new PIXI.Application({width: 64*10, height: 64*10});
	document.body.appendChild(app.view);

	PIXI.loader
		.add("images/mur.png")
    .add("images/sol.png")
    .add("images/caisse.png")
    .add("images/caisse_ok.png")
    .add("images/objectif.png")
    .add("images/personnagehaut.png")
    .add("images/personnagebas.png")
    .add("images/personnagegauche.png")
    .add("images/personnagedroite.png")
		.load(setup);
  

	function setup() {

    var carte = new Carte();
    carte.dessiner(app);

    let haut = keyboard("ArrowUp"),
        bas = keyboard("ArrowDown"),
        gauche = keyboard("ArrowLeft"),
        droite = keyboard("ArrowRight");
    

    //Initialisation clavier
    haut.press = () => {
      carte.joueur.deplacer(HAUT, carte.carte);
      carte.dessiner(app);
    }
    
    bas.press = () => {
      carte.joueur.deplacer(BAS, carte.carte);
      carte.dessiner(app);
    }
    
    gauche.press = () => {
      carte.joueur.deplacer(GAUCHE, carte.carte);
      carte.dessiner(app);
    }
    
    droite.press = () => {
      carte.joueur.deplacer(DROITE, carte.carte);
      carte.dessiner(app);
    }

    state = play;
    app.ticker.add(delta => gameLoop(delta, carte));
	 }  

   function play (delta, carte) {
      if(carte.gagner())
        state = end;
   }

   function gameLoop(delta, carte) {
      state(delta, carte);
   }

   function end() {
      alert("Félicitation vous avez gagné !");
   }