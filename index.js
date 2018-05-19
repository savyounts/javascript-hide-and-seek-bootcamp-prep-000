function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  
  return document.querySelector("div div div div div")
}

function increaseRankBy(n){
  var ranks = document.querySelector('.ranked-list')
  for (var i =0; i<ranks.length; i++){
    ranks[i].innerHTML = ranks[i].innerHTML + n
  }
}