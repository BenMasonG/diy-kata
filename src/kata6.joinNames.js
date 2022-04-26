const joinNames = namesObj => {
   const names = namesObj.map(obj => obj.name);
   const finalName = names.pop();

   return names.length ? names.join(', ') + ' & ' + finalName : finalName;
};

module.exports = joinNames;
