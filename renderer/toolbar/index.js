var onClickNew = function(event){
  this.$emit(toolbar.EventType.NEW);
};

var onClickDelete = function(event){
  this.$emit(toolbar.EventType.DELETE);
}

var toolbar = new Vue({
  el:'#toolbar',
  data:{list:[]},
  methods: {
    onClickNew,onClickDelete
  }
});

module.exports = toolbar;

toolbar.EventType = {
  NEW : 'new',
  DELETE:'delete'
}
