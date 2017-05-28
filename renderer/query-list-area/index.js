const keycode = require('keycode');
const query = require('./query.js');

var executeQuery = function(ctrlKey,suppressErr){
  var selected = this.list.find(q=>q.selected);
  if(!selected){
    return;
  }
  query(selected.detail,ctrlKey).then(function(res){
    selected.model = res.result;
    selected.count = '';
    if(ctrlKey){
      selected.count = res.count + '件';
    }
  }).catch(function(err){
      if(!suppressErr){
        alert(err);
      }
  });
};

var onKeyDown = function(event){
  if(keycode(event) !='f7'){
    return;
  }
  executeQuery.call(this,event.ctrlKey);
};

var selectList = function(index){
  this.list.forEach(t=>{
    t.selected = false;
  });
  this.list[index].selected = true;
  if(this.list[index].model.length == 0){
    executeQuery.call(this,event.ctrlKey,true);
  }
};

var onClickList = function(event){
  var data = event.currentTarget.dataset;
  this.selectList(data.id);
};

var queryListArea = new Vue({
  el:'#query-list-area',
  data:{list:[]},
  methods: {
    onKeyDown,onClickList,selectList
  }
});

module.exports = queryListArea;

queryListArea.EventType = {
  SWITCH : 'switch'
}
