var player={}
var tmp={
  r:true
}
function D(x){
  return new ExpantaNum(x)
}
function start(){
  let a={
   progress:D(0),
    stage:0
  }
  return a
}
function save(){
    localStorage.setItem("gaming",btoa(JSON.stringify(player)))
}
function fixSave() {

let    defaultData = start();

    fixData(defaultData, player);


    }


function fixData(defaultData, newData) {

    for (item in defaultData) {

        if (defaultData[item] == null) {

            if (newData[item] === undefined)

                newData[item] = null;

        }

        else if (Array.isArray(defaultData[item])) {

            if (newData[item] === undefined)

                newData[item] = defaultData[item];


            else

                fixData(defaultData[item], newData[item]);

        }

        else if (defaultData[item] instanceof ExpantaNum) { // Convert to Decimal

            if (newData[item] === undefined)

                newData[item] = defaultData[item];


            else

                newData[item] = new ExpantaNum(newData[item]);

        }

        else if ((!!defaultData[item]) && (typeof defaultData[item] === "object")) {

            if (newData[item] === undefined || (typeof defaultData[item] !== "object"))

                newData[item] = defaultData[item];


            else

                fixData(defaultData[item], newData[item]);

        }

        else {

            if (newData[item] === undefined)

                newData[item] = defaultData[item];

        }

    }

}

function load() {
	let get = localStorage.getItem("gaming");

	if (get === null || get === undefined) {
		player = start();
	}
	else {
		player = Object.assign(start(), JSON.parse(decodeURIComponent(escape(atob(get)))));
		fixSave();
	}
  (app = new Vue({
      el: "#app",
      data: {
        player,
        tmp,

      },
    }))
  
}
setInterval(function () {save()}, 5000);
window.onload=function(){load()};

function exportSave() {
  let str = btoa(JSON.stringify(player)); 
const el = document.createElement("textarea");	
el.value = str;	document.body.appendChild(el);	
el.select();	el.setSelectionRange(0, 99999);
document.execCommand("copy");
document.body.removeChild(el); 
}


function importSave(imported = undefined) {
  if (imported === undefined) imported = prompt("paste your save here")
  player =JSON.parse(atob(imported))
  save()
  window.location.reload();
    
}
function hardReset(){
  if(confirm("Are you sure??? It will reset EVERYTHING and you will not get any reward!!!")){
    player=start()
    window.location.reload();
    save()
  }
}