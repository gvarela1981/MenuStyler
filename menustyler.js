function isPhantomTab(){
    // returns 1 if there is a Phantom tab, 0 if there is none
    isPhantom = 0
    LoadedTab = [];
    // create a copy of gestorMenu.items into LayerCopy array
    LayerCopy = Object.entries(gestorMenu.items) ;
    // push into LoadedTab array an element with gestorMenu.items.tab.id as a key and -1 as value
    // to count how many layers (items) has eahc tab.id
    LayerCopy.forEach(element => LoadedTab[element[1].tab.id] = -1);
    console.log(LoadedTab)
    //
    LayerCopy.forEach(element => LoadedTab[element[1].tab.id] += 1);
    console.log(LoadedTab)
    // all phtantom tabs has id of "" just like basemaps, if LoadedTabs[""] is greater than one
    // there is a Phantom layer alongside with basmaps
    if(LoadedTab[""] > 0) isPhantom = 1;
    return isPhantom;
}

gestorMenu.getItems = function(){
    items = []
    for (var key in this.items) {
        items.push(this.items[key])
    }
    return items
}

function phantom2NamedTab(){
    // Agrego el tab para reemplazar al tab fantasma
    t1 = new Tab('t1')
    t1.id  = 'dataJson'
    t1.listType = 'accordion'
    impresorGroupTemp = impresorGroupWMSSelector;
    info = new LayersInfoWMTS()

    // saco los items de gestorMenu a un array para iterarlo
    // no lo puedo iterar desde gestorMenu.items
    // itemsLoop es un array asociado, al modificar este array
    // se modifica al atributo del objeto gestorMenu
    var itemsLoop = gestorMenu.getItems()
    for(i in itemsLoop){
        itemsLoop[i].tab.id = t1.id
    }

    gestorMenu.addTab(t1);
    gestorMenu.printMenu();
}

function unGhost(){
  if(isPhantomTab() == 1) phantom2NamedTab()
}


// To create a second tab with a select executte filterByOrigin()
function filterByOrigin(){
    t2 = new Tab('t2')
    t2.id  = 'ByOrigin'
    t2.listType = 'combobox'
   
    gestorMenu.addTab(t2);  
    gestorMenu.printMenu();
}

	
	
	
