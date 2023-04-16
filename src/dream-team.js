const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false
  } else {

  let arr = []
  let strArr = []
  for(let i = 0; i < members.length; i++){
       if(typeof members[i] === 'string'){
           strArr.push(members[i].toUpperCase())
       } 
   }
  for(let j = 0; j < strArr.length; j++){
      strArr[j].replace(/^ +/,"")
      arr.push(strArr[j].replace(/^ +/,""))
  }     

     
   let sorted = arr.sort()
   let result = []
   
  for(let j = 0; j < sorted.length; j++){
       result.push(sorted[j].charAt(0))
   }
   
   return result.join('')
  }
}

module.exports = {
  createDreamTeam
};
