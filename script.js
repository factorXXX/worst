setInterval(function(){
  document.body.style.background = "#ff0000"
    document.body.style.color = "#0000ff"
  player.progress=player.progress.times(0.85**0.05)
  
  if(player.progress.gte(1e3)&&player.stage==0){
    player.stage=1
    
    new Audio("https://cdn.glitch.global/48c6f376-d891-4ea1-80aa-53a885b3ad21/Windows%20XP%20Startup.mp3?v=1679752131779").play();
  }
  if(player.stage!=0){ document.body.style.background = "#000000"
    document.body.style.color = "#ffffff"

    }
  else if(Math.random()>=0.8){
    tmp.r=!tmp.r
    if(tmp.r){
      document.body.style.background = "#ff0000"
    document.body.style.color = "#0000ff"
    }
    else {
      document.body.style.background = "#0000ff"
    document.body.style.color = "#ff0000"
        
    };
    
    
  }
  document.getElementById('fuck-you-js-why-cant-iuse-window.innerHeight-inside-height').width=window.innerWidth*0.975
    document.getElementById('fuck-you-js-why-cant-iuse-window.innerHeight-inside-height').height=window.innerHeight*0.975
},50)