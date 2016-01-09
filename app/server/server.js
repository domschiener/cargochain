Meteor.methods({
  new_cargo: function(owner_data, cargo_data) {
    return cargo.insert({owner: owner_data, cargo: cargo_data});
  },
  paid: function(cargo_id) {
    cargo.update({_id: cargo_id}, {$set: {'cargo.status': true}});
    return cargo.update({_id: cargo_id}, {$set: {'cargo.paid': true}})
  }
})
