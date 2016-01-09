Meteor.publish('cargoListings', function() {
  return cargo.find({});
});
