const isSubsequence = function(s,t){
    let i = 0;
    let j = 0;
    
  while(i<s.length && j< t.length){
    if(s[i] == t[j]) {
        i ++;
    }j++;
    
  }
  if(i == s.length) return true;
  else return false;
};

const s = 'axc';
const t = 'ahbgdc';
const u = 'abc';
const p = 'aec';
const q = 'abcde';

console.log(isSubsequence(p,q));
console.log(isSubsequence(u,t));
console.log(isSubsequence(s,t));