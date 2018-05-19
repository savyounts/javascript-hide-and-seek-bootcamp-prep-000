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
  return document.querySelector('div#grand-node div div div div')
}