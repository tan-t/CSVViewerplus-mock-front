const keycode = require('keycode');

var onKeyDown = function(event){
  if(keycode(event) != 'enter'){
    return;
  }
  if(this.tableInput.length <=0){
    return;
  }

  if(event.ctrlKey){
    if(this.tableInput[0] != '%'){
      this.tableInput = '%' + this.tableInput;
    }
    if(this.tableInput.slice(-1) != '%'){
      this.tableInput += '%';
    }
  }
  this.$emit(tableSearchArea.EventType.SEARCH, {input:this.tableInput,method:this.searchMethod});
};

var onClickList = function(event){
  this.tables.forEach(t=>{
    t.selected = false;
  });
  var data = event.currentTarget.dataset;
  this.tables[data.id].selected = true;
};

var onDblClickList = function(event){
  var data = event.currentTarget.dataset;
  this.$emit(tableSearchArea.EventType.SELECT,{data:data,query:buildSelect(data.name)});
};

var buildSelect = require('./select-builder.js');

var tableSearchArea = new Vue({
  el:'#table-search-area',
  data:{tableInput:'',searchMethod:'contains',tables:[]},
  methods: {
    onKeyDown,onClickList,onDblClickList
  }
});

module.exports = tableSearchArea;

tableSearchArea.EventType = {
  SEARCH : 'search',
  SELECT:'select'
}
