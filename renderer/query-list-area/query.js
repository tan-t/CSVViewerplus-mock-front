module.exports = function(statement,ctrlKey){
  return new Promise(function(resolve, reject) {
    if(statement.length <= 0){
      resolve([]);
    }
    if(Math.round((Math.random()*10),0)%2 == 1){
      reject('error!');
    }
    var result = [{a:1,b:2},{a:2,b:1}];
    if(!ctrlKey){
      resolve({result});
      return;
    }
    var count = 12;
    resolve({result,count});
  });
}
