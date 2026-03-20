const contains = function(obj) {
  if (obj.value !== undefined){
    return obj.value;

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            const result  = contains(obj[key])
            if (result !== undefined) {
                return result
            }
        }
    }
  }
};
  
// Do not edit below this line
module.exports = contains;
