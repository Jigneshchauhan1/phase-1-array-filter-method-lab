const { arrayContaining } = require("expect");

function findMatching(arr, query) {
  return arr.filter(function(elements) {
    return elements.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
function fuzzyMatch(arr, query){
  return arr.filter(function(elements) {
    return elements.toLowerCase().indexOf(query.toLowerCase()) == 0
  })
}

function matchName (arr, query){
  return arr.filter(function(el){
    return el.name == query;
  })
}