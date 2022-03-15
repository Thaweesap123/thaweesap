function removeDups(s){
    let check = [];
    s.forEach(function(i) {
    if(!check[i]) {
        check[i] = true;
    }
  });
  return Object.keys(check);
    }

console.log(removeDups([1,0,1]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));