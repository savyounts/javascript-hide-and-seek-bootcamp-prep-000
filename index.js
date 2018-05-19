function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  
  return document.querySelector("div div div div div")
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll('.ranked-list')
  for (var i =0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild(){
  var divs = [document.querySelectorAll('div#grand-node div')]
  while(divs){
    if(document.querySelector(divs) === 'boo'){
      var boo = divs
    }
  }
  if(Array.isArray(divs)){
    for(let i=0; i<divs.length; i++){
      next.push(divs[i])
    }
  return boo.innerHTML
  }
}