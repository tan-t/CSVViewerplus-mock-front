// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const tableSearch = require('./renderer/table-search');

var toolbar = require('./renderer/toolbar');

var tableSearchArea = require('./renderer/table-search-area');

tableSearchArea.$on(tableSearchArea.EventType.SEARCH,function(e){
  tableSearch(e.input,e.method).then(function(res){
    tableSearchArea.tables = res;
  });
});
var queryListArea = require('./renderer/query-list-area');

var pushNewQuery = function(title,detail){
  var query = {title,detail,selected:false,model:[]};
  queryListArea.list.push(query);
  queryListArea.selectList(queryListArea.list.length-1);
}

var removeSelectedQuery = function(){
  var selected = queryListArea.list.findIndex(q=>q.selected);
  if(selected < 0){
    return;
  }
  queryListArea.list.splice(selected,1);
}

toolbar.$on(toolbar.EventType.NEW,function(){
  pushNewQuery('','');
});

toolbar.$on(toolbar.EventType.DELETE,removeSelectedQuery);

tableSearchArea.$on(tableSearchArea.EventType.SELECT,function(e){
  pushNewQuery(e.data.name,e.query);
});
