function friend(friends){
  let ans = friends.filter((n) => n.length == 4);
  return ans;
}

console.log(friend(["Ryan", "Kieran", "Mark"]))