/*    funzione che cambia lo sfondo    */
function gestoreCambiaSfondo () {
    try {
        if (nodoSfondo.getAttribute("class") == "sfondo1"){
            nodoSfondo.setAttribute("class", "sfondo2");
        } else {
            nodoSfondo.setAttribute("class", "sfondo1");
        }  
    } catch(e) {
        alert("gestoreCambiaSfondo + e");
    }
}

/*    funzione che rimuove tutti figli da un nodo    */
function rimuoviFigli(nodo) {
  while (nodo.hasChildNodes()) {
    nodo.removeChild(nodo.firstChild);
  }
}

/*    funzione apre le pagine per ogni disciplina    */
function apriPagina (nodo, nodo2) {
    if (nodo.getAttribute("class") == "aperta") {
        nodo.setAttribute("class", "nascosta");
    } else {
        nodo.setAttribute("class", "aperta");
    }
}

/*    funzione che cambia le foto della galleria    */
function cambiaFoto (x) {
    indiceFoto += x;
    if (indiceFoto == NUMERO_FOTO) {
        indiceFoto = 0;
    }
    if (indiceFoto < 0) {
        indiceFoto = NUMERO_FOTO - 1;
    }
    nodoFotoPalo.setAttribute("src", galleriaPalo[indiceFoto]);
    nodoFotoTessuti.setAttribute("src", galleriaTessuti[indiceFoto]);
    nodoFotoCerchio.setAttribute("src", galleriaCerchio[indiceFoto]);
    nodoFotoTrapezio.setAttribute("src", galleriaTrapezio[indiceFoto]);
}

/*    gestore che apre e chiude il menu    */
function gestoreMenu () {
    try {
        if (nodoMenu.getAttribute("class") == "menuChiuso") {
            nodoMenu.setAttribute("class", "menuAperto");
            nodobar1.setAttribute("class", "barraRuotata");
            nodobar2.setAttribute("class", "barraRuotata");
            nodobar3.setAttribute("class", "barraRuotata");
            
        } else { 
            nodoMenu.setAttribute("class", "menuChiuso");
            nodobar1.setAttribute("class", "barraNormale");
            nodobar2.setAttribute("class", "barraNormale");
            nodobar3.setAttribute("class", "barraNormale");   
        }
    } catch(e) {
        alert("gestoreMenu" + e)
    }
}

/*    gestore che apre e chiude le pagine delle discipline selezionate    */
function gestoreClickPagina () {
    try {
        if (this.id == "palo") {
            apriPagina(nodoPaginaPalo, nodoPalo);
        }
        if (this.id == "tessuti") {
            apriPagina(nodoPaginaTessuti, nodoTessuti);
        }
        if (this.id == "cerchio") {
            apriPagina(nodoPaginaCerchio, nodoCerchio);
        }
        if (this.id == "trapezio") {
            apriPagina(nodoPaginaTrapezio, nodoTrapezio);
        }
    } catch (e) {
        alert("gestoreClick" + e)
    }
}

/*    gestore che fa scorrere avanti le foto delle gallerie    */
function gestoreClickAvanti () {
    try {
        cambiaFoto(+1);
    } catch (e) {
        alert("gestoreClickAvanti" + e)
    }
}

/*    gestore che fa scorrere indietro le foto delle gallerie    */
function gestoreClickIndietro () {
    try {
        cambiaFoto(-1);
    } catch (e) {
        alert("gestoreClickIndietro" + e)
    }
}

/*    gestore che imposta i dati inseriti e fa partire la ricerca    */
function gestoreClickScopri () {
    try {
        if (this.id == "donna") {
            this.setAttribute("class", "cliccato");
            nodoUomo.setAttribute("class", "nonCliccato");
            genere = this.id;
        }
        if (this.id == "uomo") {
            this.setAttribute("class", "cliccato");
            nodoDonna.setAttribute("class", "nonCliccato");
            genere = this.id;
        }
        if (this.id == "poca") {
            this.setAttribute("class", "cliccato");
            nodoForza2.setAttribute("class", "nonCliccato");
            nodoForza3.setAttribute("class", "nonCliccato");
            strong = this.id;
        }
        if (this.id == "modesta") {
            this.setAttribute("class", "cliccato");
            nodoForza1.setAttribute("class", "nonCliccato");
            nodoForza3.setAttribute("class", "nonCliccato");
            strong = this.id;
        }
        if (this.id == "molta") {
            this.setAttribute("class", "cliccato");
            nodoForza1.setAttribute("class", "nonCliccato");
            nodoForza2.setAttribute("class", "nonCliccato");
            strong = this.id;
        }
        if (this.id == "basso") {
            this.setAttribute("class", "cliccato");
            nodoFlex2.setAttribute("class", "nonCliccato");
            nodoFlex3.setAttribute("class", "nonCliccato");
            flex = this.id;
        }
        if (this.id == "medio") {
            this.setAttribute("class", "cliccato");
            nodoFlex1.setAttribute("class", "nonCliccato");
            nodoFlex3.setAttribute("class", "nonCliccato");
            flex = this.id;
        }
        if (this.id == "alto") {
            this.setAttribute("class", "cliccato");
            nodoFlex2.setAttribute("class", "nonCliccato");
            nodoFlex1.setAttribute("class", "nonCliccato");
            flex = this.id;
        }
        if (nodoUomo.getAttribute("class") == "cliccato" ||
            nodoDonna.getAttribute("class") == "cliccato" &&
            nodoForza1.getAttribute("class") == "cliccato" ||
            nodoForza2.getAttribute("class") == "cliccato" ||
            nodoForza3.getAttribute("class") == "cliccato" &&
            nodoFlex1.getAttribute("class") == "cliccato" ||
            nodoFlex2.getAttribute("class") == "cliccato" ||
            nodoFlex3.getAttribute("class") == "cliccato") {
            gestoreCerca(); 
        } 
    } catch (e) {
        alert("gestoreClickScopri");
    }
}

/*    funzione che scandisce l'array e cerca il risultato creando un nuovo array    */
function ricercaMultipla (flessibilita, forza, sesso) {
    var tricks= [];
    for (var i=0; i < poletrick.length; i++) {
        var trick = poletrick[i];
        if (trick.flessibilita == flex && 
            trick.forza == strong &&
            trick.sesso == genere) {
            tricks.push(trick);
        }
    }
    return tricks;
}

/*    funzione che crea il risultato dato dalla ricerca    */
function creaRisultato (nodo, elementi) {
    rimuoviFigli(nodo);
    var tricks = [];
    for (var i = 0; i < elementi.length; i++) {
        var elemento = elementi[i];
        nodo.appendChild(nodoParagrafo);
        var nodoTesto = document.createTextNode(elemento);
        nodoParagrafo.appendChild(nodoTesto); 
    }
}

/*    funzione che calcola la descrizione del risultato    */
function calcolaDescrizioni(tricks) {
   var Descrizioni = [];
   for (var i = 0; i < tricks.length; i++) {
       var trick = tricks[i];
       var nodoImmagine = document.createElement("img");
       nodoImmagine.setAttribute("src", "img/poletrick/" + trick.sesso + "/" + trick.nome + ".jpg");
       nodoParagrafo.appendChild(nodoImmagine); 
       var nodoTitolo = document.createElement("h2");
       var titolo = document.createTextNode(trick.nome);
       nodoTitolo.appendChild(titolo);
       nodoParagrafo.appendChild(nodoTitolo);
       var s = 
           "Per svolgere questo pole trick occorre " + 
           trick.forza + " forza e il livello di flessibilità richiesto è " + 
           trick.flessibilita + ". " + trick.descrizione; 
       Descrizioni.push(s);
       nodoRefresh.setAttribute("class", "visibile");
   }
    return Descrizioni;
  
}

/*    gestore che avvia la ricerca    */
function gestoreCerca () {
    try {
        rimuoviFigli(nodoParagrafo);
        var flessibilita = flex;
        var forza = strong;
        var sesso = genere;
        var tricks = ricercaMultipla(flessibilita, forza, sesso);
        var Descrizioni;
        if (tricks.length != 0) {
            Descrizioni = calcolaDescrizioni(tricks);
        } else {
              Descrizioni = [""];
        }
        creaRisultato(nodoRisultato, Descrizioni);
    } catch(e) {
        alert("gestoreCerca" + e)
    }
}

/*    gestore che azzera i dati inseriti    */
function gestoreRefresh () {
    try {
        nodoRefresh.setAttribute("class", "nascosto");
        genere = undefined;
        strong = undefined;
        flex = undefined;
        nodoUomo.setAttribute("class", "nonCliccato");
        nodoDonna.setAttribute("class", "nonCliccato");
        nodoForza1.setAttribute("class", "nonCliccato");
        nodoForza2.setAttribute("class", "nonCliccato");
        nodoForza3.setAttribute("class", "nonCliccato");
        nodoFlex1.setAttribute("class", "nonCliccato");
        nodoFlex2.setAttribute("class", "nonCliccato");
        nodoFlex3.setAttribute("class", "nonCliccato");
        rimuoviFigli(nodoParagrafo);
        rimuoviFigli(nodoRisultato);
    } catch (e) {
        alert("gestoreRefresh" + e);
    }
}

const NUMERO_FOTO = 2;
var nodoCambia;
var nodoSfondo;

var nodoMenu;
var nodoAprichiudi;
var nodobar1;
var nodobar2;
var nodobar3;

var nodoPalo;
var nodoPaginaPalo;
var nodoTessuti;
var nodoPaginaTessuti;
var nodoCerchio;
var nodoPaginaCerchio;
var nodoTrapezio;
var nodoPaginaTrapezio;

var nodoAvantiPalo;
var nodoIndietroPalo;
var nodoFotoPalo;
var nodoAvantiTessuti;
var nodoIndietroTessuti;
var nodoFotoTessuti;
var nodoAvantiCerchio;
var nodoIndietroCerchio;
var nodoFotoCerchio;
var nodoAvantiTrapezio;
var nodoIndietroTrapezio;
var nodoFotoTrapezio;

var nodoUomo;
var nodoDonna;
var nodoForza1;
var nodoForza2;
var nodoForza3;
var nodoFlex1;
var nodoFlex2;
var nodoFlex3;

var nodoRefresh;
var nodoRisultato;

var galleriaPalo;
var galleriaTessuti;
var galleriaCerchio;
var galleriaTrapezio;
var indiceFoto;
//stato
var genere;
var flex;
var strong;

function gestoreLoad () {
    try {
        nodoCambia = document.getElementById("cambia");
        nodoSfondo = document.getElementById("acrobatic");
        
        nodoMenu = document.getElementById("menu");
        nodoAprichiudi = document.getElementById("aprichiudi");
        nodobar1 = document.getElementById("bar1");
        nodobar2 = document.getElementById("bar2");
        nodobar3 = document.getElementById("bar3");
        
        nodoPalo = document.getElementById("palo");
        nodoTessuti = document.getElementById("tessuti");
        nodoCerchio = document.getElementById("cerchio");
        nodoTrapezio = document.getElementById("trapezio");
        nodoPaginaPalo = document.getElementById("paginaPalo");
        nodoPaginaTessuti = document.getElementById("paginaTessuti");
        nodoPaginaCerchio = document.getElementById("paginaCerchio");
        nodoPaginaTrapezio = document.getElementById("paginaTrapezio");
        
        nodoAvantiPalo = document.getElementById("avantiPalo");
        nodoIndietroPalo = document.getElementById("indietroPalo");
        nodoAvantiTessuti = document.getElementById("avantiTessuti");
        nodoIndietroTessuti = document.getElementById("indietroTessuti");
        nodoAvantiCerchio = document.getElementById("avantiCerchio");
        nodoIndietroCerchio = document.getElementById("indietroCerchio");
        nodoAvantiTrapezio = document.getElementById("avantiTrapezio");
        nodoIndietroTrapezio = document.getElementById("indietroTrapezio");
        
        nodoFotoPalo = document.getElementById("fotoPalo");
        nodoFotoTessuti = document.getElementById("fotoTessuti");
        nodoFotoCerchio = document.getElementById("fotoCerchio");
        nodoFotoTrapezio = document.getElementById("fotoTrapezio");
        
        nodoUomo = document.getElementById("uomo");
        nodoDonna = document.getElementById("donna");
        nodoForza1 = document.getElementById("poca");
        nodoForza2 = document.getElementById("modesta");
        nodoForza3 = document.getElementById("molta");
        nodoFlex1 = document.getElementById("basso");
        nodoFlex2 = document.getElementById("medio");
        nodoFlex3 = document.getElementById("alto");

        nodoRefresh = document.getElementById("refresh");
        nodoRisultato = document.getElementById("risultato");
        
        nodoCambia.onclick = gestoreCambiaSfondo;
        nodoAprichiudi.onclick = gestoreMenu;
        
        nodoPalo.onclick = gestoreClickPagina;
        nodoTessuti.onclick = gestoreClickPagina;
        nodoCerchio.onclick = gestoreClickPagina;
        nodoTrapezio.onclick = gestoreClickPagina;
        
        nodoAvantiPalo.onclick = gestoreClickAvanti;
        nodoIndietroPalo.onclick = gestoreClickIndietro;
        nodoAvantiTessuti.onclick = gestoreClickAvanti;
        nodoIndietroTessuti.onclick = gestoreClickIndietro;
        nodoAvantiCerchio.onclick = gestoreClickAvanti;
        nodoIndietroCerchio.onclick = gestoreClickIndietro;
        nodoAvantiTrapezio.onclick = gestoreClickAvanti;
        nodoIndietroTrapezio.onclick = gestoreClickIndietro;
        
        nodoUomo.onclick = gestoreClickScopri;
        nodoDonna.onclick = gestoreClickScopri;
        nodoForza1.onclick = gestoreClickScopri;
        nodoForza2.onclick = gestoreClickScopri;
        nodoForza3.onclick = gestoreClickScopri;
        nodoFlex1.onclick = gestoreClickScopri;
        nodoFlex2.onclick = gestoreClickScopri;
        nodoFlex3.onclick = gestoreClickScopri;
        nodoRefresh.onclick = gestoreRefresh;
        
        galleriaPalo = [];
        for (var i=0; i< NUMERO_FOTO; i++) {
            var nomeFoto = "img/galleriaPalo/fotoPalo" + i + ".png";
            galleriaPalo.push(nomeFoto);
        }
        galleriaTessuti = [];
        for (var i=0; i< NUMERO_FOTO; i++) {
            var nomeFoto = "img/galleriaTessuti/fotoTessuti" + i + ".png";
            galleriaTessuti.push(nomeFoto);
        }
        galleriaCerchio = [];
        for (var i=0; i< NUMERO_FOTO; i++) {
            var nomeFoto = "img/galleriaCerchio/fotoCerchio" + i + ".png";
            galleriaCerchio.push(nomeFoto);
        }
        galleriaTrapezio = [];
        for (var i=0; i< NUMERO_FOTO; i++) {
            var nomeFoto = "img/galleriaTrapezio/fotoTrapezio" + i + ".png";
            galleriaTrapezio.push(nomeFoto);
        }
        indiceFoto = 0;
        cambiaFoto(0);   

        nodoParagrafo = document.createElement("p");
        nodoRisultato.appendChild(nodoParagrafo);
    } catch (e) {
        alert("gestoreLoad" + e)
    }
}
window.onload = gestoreLoad;

/*    contenuti    */
var poletrick = [
   {
       nome : "Gemini",
       flessibilita : "basso",
       forza : "poca",
       sesso : "donna",
       descrizione : "Il Gemini, conosciuto anche come Inside Leg Hang è una delle prime figure che l'atleta impara, questo perchè è universale e permette di poter entrare in altri trick. Consiste nel rimanere agganciati al palo con la gamba interna e il fianco dello stesso lato. Il braccio può stringere il palo al di sotto, formando con il corpo una linea retta, o non stringerlo affatto, restando completamente agganciati solo con la forza della gamba. "
   },
   {
       nome : "Handspring",
       flessibilita : "basso",
       forza : "modesta",
       sesso : "donna",
       descrizione : "La Handspring fa parte dalla famiglia delle bandiere ed è la più facile tra di esse. La figura si impara in genere dopo uno o due anni di pratica, a seconda della forza dell'atleta. Consiste nel tenere il proprio peso solo con la forza delle braccia che formano una leva, il braccio superiore tira per avvicinare il corpo verso l'alto mentre quello inferiore spinge per allontanare le gambe e farle salire in verticale."
   },
   {
       nome : "Flag",
       flessibilita : "basso",
       forza : "molta",
       sesso : "donna",
       descrizione : "La Flag, conosciuta in italiano come bandiera è una figura tra le più complicate a livello di forza. Può essere eseguita sia con le gambe tese, per chi ha più esperienza e forza, sia con una gamba piegata. "
   },
   {
       nome : "Jade",
       flessibilita : "medio",
       forza : "poca",
       sesso : "donna",
       descrizione : "Il Jade è una delle figure più belle e più utilizzate in competizione. Sebbene sembri una figura impossibile la forza richiesta è veramente ridotta. Esistono diverse tipologie di Jade a seconda dei gradi che forma l'apertura delle gambe a partire da 160 gradi fino ad oltrepassare i 180."
       
   },
   {
       nome : "Allegra",
       flessibilita : "medio",
       forza : "modesta",
       sesso : "donna",
       descrizione : "l'Allegra sebbene sembri un trick impossibile non lo è affatto e con abbastanza flessibilità si può apprendere in poco tempo. Si tratta semplicemente di una modifica ad una delle principali figure che si apprendono per prime, il Gemini. La gamba interna è tesa in alto sorretta dal braccio e dal fianco mentre la gamba esterna al palo è in basso tenuta dall'altro braccio che questa volta passa al di sotto del palo."
   },
   {
       nome : "Iron x",
       flessibilita : "medio",
       forza : "molta",
       sesso : "donna",
       descrizione : "Iron x fa parte della famiglia delle bandiere, insieme a Handspring e Flag. La differenza dalla bandiera classica a gambe unite consiste nell'apertura di quest'ultime che garantisce una minore forza richiesta alle braccia ma una maggiore flessibilità delle gambe."
   },
   {
       nome : "Eagle",
       flessibilita : "alto",
       forza : "poca",
       sesso : "donna",
       descrizione : "L'Eagle è una figura principalmente dinamica, in quanto sia preferibile svolgerla in un palo 'spin' (autoruotante) per esaltarne la bellezza. Consiste nel formare una specie di spirale con il corpo intorno al palo tenendosi semplicemente con la gamba inferiore e il fianco, mentre le braccia sono tese in alto a prendere l'altra gamba che forma una spaccata."
   },
   {
       nome : "Spatchcock",
       flessibilita : "alto",
       forza : "modesta",
       sesso : "donna",
       descrizione : "Spatchcock è un trick che rimarrà alla storia, non richiede un'elevata forza ma la flessibiltà richiesta è veramente altissima. L'intero peso del corpo è sorretto dall'incastro tra il dietro delle caviglie e la schiena. E' un trick veramente da brividi, un livello in cui non tutti gli atleti riescono ad arrivare. "
   },
   {
       nome : "Rainbow marchenko",
       flessibilita : "alto",
       forza : "molta",
       sesso : "donna",
       descrizione : "Il Rainbow Marchenko è tra le figure più complicate esistenti nel mondo della pole dance. Non solo richiede flessibilità delle gambe ma persino un'altissima flessibilità della schiena. Il peso dell'intero corpo è retto semplicemente da un braccio al palo mentre l'altro braccio  è steso e prende la caviglia del piede in spaccata."
   },
   {
       nome : "Shoulder mount",
       flessibilita : "basso",
       forza : "poca",
       sesso : "uomo",
       descrizione : "Shoulder mount è una tecnica di salita al palo che permette di poter entrare in trick differenti. La forza richiesta per un uomo è di basso livello, un po' più difficoltosa invece per le donne. Consiste nell'appoggiare una spalla al palo mentre le braccia tirano per sollevare il corpo da terra."
   },
   {
       nome : "Planche",
       flessibilita : "basso",
       forza : "modesta",
       sesso : "uomo",
       descrizione : "La Planche non è una figura a incastro perciò il peso del corpo è sorretto dalla forza di braccia e addominali. Consiste nel formare, con il corpo, una linea retta parallela al pavimento. Un braccio sorregge il peso dall'alto tirando mentre l'altro spinge dal basso, contemporaneamente gli addominali tirati fanno si che il corpo resti teso e lineare."
   },
   {
       nome : "Handstand flag",
       flessibilita : "basso",
       forza : "molta",
       sesso : "uomo",
       descrizione : "Questa tipologia di bandiera è la più difficile. Le braccia sono tese e le gambe unite. La forza degli addominali permette di mantenere la posizione mentre il braccio di sopra tira verso l'alto e quello inferiore spinge all'esterno."
   },
   {
       nome : "Straddle",
       flessibilita : "medio",
       forza : "poca",
       sesso : "uomo",
       descrizione : "Lo Straddle è una delle figure base che si apprendono per prime. Consiste nel sollevare il proprio corpo con la forza delle braccia e invertirlo all'indietro con le gambe aperte a V. In genere gli uomini ci mettono un mese o meno ad apprendere la figura ed entrarci correttamente mentre le donne hanno bisogno di un po' più di tempo per via della differenza di muscolatura."
       
   },
   {
       nome : "Aisha",
       flessibilita : "medio",
       forza : "modesta",
       sesso : "uomo",
       descrizione : "L'Aisha fa parte della famiglia delle bandiere ed è tra le più semplici. Consiste nel sospendere il proprio corpo con la forza di una leva formata dalle braccia. Il braccio superiore forma un angolo che incastra il palo al suo interno e tira il corpo verso l'alto mentre il braccio inferiore spinge verso l'esterno fancendo sollevare le gambe."
       
   },
   {
       nome : "Iguana planche",
       flessibilita : "medio",
       forza : "molta",
       sesso : "uomo",
       descrizione : "L'Iguana planche è una figura principlamente di forza sebbene occorra una modesta flessibilità di spalle. Il peso del corpo è sorretto dalle braccia e dal lato del fianco che si appoggia al palo. La quantità di forza di addominali e dorsali richiesta è veramente elevata e dev'essere in grado di sospendere il busto completamente parallelo al pavimento."
   },
   {
       nome : "Bridge",
       flessibilita : "alto",
       forza : "poca",
       sesso : "uomo",
       descrizione : "Il Bridge sebbene sembri una figura difficile, non le è affatto ma richiede molta flessibilità di schiena. Consiste nel rimanere agganciati al palo con le gambe strette attorno ad esso cercando di mantenerle parallele al pavimento mentre il busto si inarca a formare un arco."
       
   },
   {
       nome : "Keem",
       flessibilita : "alto",
       forza : "modesta",
       sesso : "uomo",
       descrizione : "Il Keem è una figura generalmente dinamica, ovvero che si svolge preferibilmente su un palo spin (autoruotante). Consiste nel sorreggere il corpo con la forza delle braccia mentre le gambe sono aperte in spaccata frontale."
       
   },
   {
       nome : "Russian split",
       flessibilita : "alto",
       forza : "molta",
       sesso : "uomo",
       descrizione : "Il Russian split è tra i trick più complicati mai eseguiti nel mondo della pole dance. La flessibilità richiesta è veramente altissima e stesso per la forza. Consiste nel rimanere agganciati al palo semplicemente con la forza delle braccia mentre il piede spinge contro il palo, fancendo prendere al corpo una forma lineare parallela al pavimento. Le gambe sono tese e formano una spaccata di 180 gradi."
       
   }
]