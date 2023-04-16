const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */    
      function transform(arr) {
        if(!Array.isArray(arr)){
          throw new Error('\'arr\' parameter must be an instance of the Array!');
        } else if (arr.length === 0){
          return arr
        } else {
            
            
          let result = arr.slice(0);
          let checkSequences
          for (let i = 0; i < result.length; i++) { 
           
           switch (result[i]) {
             case '--discard-next':
               if(i + 1 !== undefined){
                 checkSequences = true
                 result = result.splice(i, 2)
                 return result
               }
               break;
             case '--discard-prev':
               if(i - 1 !== undefined && checkSequences !== true){
                 result = result.splice(i - 1, 2)
                 return result
               } else {
                continue; 
               }
             case '--double-next':
               if(i + 1 !== undefined && checkSequences !== true){
                 result = result.splice(i, 1, i+1)
                 return result
               } else {
                continue; 
               }
             case '--double-prev':
               if(i - 1 !== undefined && checkSequences !== true){
                 result = result.splice(i, 1, i+1)
                 return result
               } else {
                continue; 
               } 
             default:
           return arr
            }
          }
        }  
       }   


module.exports = {
  transform
};
