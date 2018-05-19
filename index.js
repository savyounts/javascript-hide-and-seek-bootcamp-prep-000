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
  var next = []
  var list = document.querySelector('div#grand-node')
  var array = [list]
  while (array){
    if(array.innerHTML === 'boo'){
      return list
    }if(Array.isArray(array)){
      for(var i=0; i<array.length; i++){
        next.push(array[i])
      }
    }
    }
  }
}