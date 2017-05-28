module.exports = function(statement,method){
  return new Promise(function(resolve, reject) {
      // TODO tan_t 本当はsqlite-masterからクエリ
      resolve([{name:'TABLE1',selected:false},{name:'TABLE2',selected:false}]);
  });
}

var toPercentageSurrounded = function(statement,method){
  switch(method){
    case 'contains':
      return endsWith(startsWith(statement));
    case 'startsWith':
      return startsWith(statement);
    case 'endsWith':
      return endsWith(statement);
    default:
      return statement;
  }
}
var startsWith = function(statement){
  if(statement.slice(-1) != '%'){
    return statement + '%';
  }
  return statement;
}
var endsWith = function(statement){
  if(statement[0] != '%'){
    return '%' + statement;
  }
  return statement;
}
