Router.route('/', {
  template: 'home'
});

Router.route('/buyer/:_id', {
  name: 'cargo',
  template: 'cargo',
  data: function() {
    return cargo.findOne({_id: this.params._id});
  }
});

Router.route('/dispute/:_id', {
  name: 'dispute',
  template: 'dispute',
  data: function() {
    return cargo.findOne({_id: this.params._id});
  }
});
