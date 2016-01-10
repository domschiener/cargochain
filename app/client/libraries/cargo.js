// var interval;
//
// function checkAddress(cargo_id, address) {
//   interval = Meteor.setInterval(function() {
//     var balance = web3.eth.getBalance(address);
//     var balance_wei = balance.toString(10);
//     var balance_eth = web3.fromWei(balance_wei, "ether");
//   }, 16000, address)
// }

Template.cargo.helpers({
  timestampToDate: function(timestamp) {
    // if(this.cargo) {
    //   if (this.cargo.paid !== true) {
    //     console.log("fdsa");
    //     checkAddress(this._id, this.cargo.address);
    //   }
    // }
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return year.toString() + '-' + month.toString() + '-' + day.toString();
  }
})

Template.cargo.events({
  'click #pay_seller': function() {
    Meteor.call('paid', this._id);

    var shipmentContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_company","type":"bytes32"},{"name":"_addr","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ship","outputs":[{"name":"vessel","type":"bytes32"},{"name":"voyage","type":"bytes32"},{"name":"booking","type":"bytes32"},{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"name","type":"bytes32"},{"name":"description","type":"string"},{"name":"hscode","type":"bytes32"},{"name":"quantity","type":"uint256"},{"name":"weight","type":"uint256"},{"name":"origin","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_company","type":"bytes32"},{"name":"_addr","type":"bytes32"},{"name":"cargoname","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_hscode","type":"bytes32"},{"name":"_quantity","type":"uint256"},{"name":"_weight","type":"uint256"},{"name":"_origin","type":"bytes32"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"},{"name":"_vessel","type":"bytes32"},{"name":"_voyage","type":"bytes32"},{"name":"_booking","type":"bytes32"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);

    var contract = shipmentContract.at(this.cargo.address);
    var cargoinfo = this;

    var filter = contract.newAgreement({}, {fromBlock: 'latest', toBlock: 'latest'}, function(error, result) {
      if (!error) {
        console.log(result);
      }
    });
    contract.agreement(cargoinfo.owner.exporter, cargoinfo.owner.exporter_company, cargoinfo.owner.exporter_address, {from: web3.eth.accounts[3], value: web3.toWei(cargoinfo.cargo.payment, 'ether'), gas: 500000}, function(error, success) {
      if(!error) {
        console.log("Successfully sent transaction.");
      }
    })
  },
  'click #releasePayment': function() {
    var shipmentContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arrival","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_company","type":"bytes32"},{"name":"_addr","type":"bytes32"}],"name":"agreement","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"ship","outputs":[{"name":"vessel","type":"bytes32"},{"name":"voyage","type":"bytes32"},{"name":"booking","type":"bytes32"},{"name":"active","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"releasePayment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"cargo","outputs":[{"name":"name","type":"bytes32"},{"name":"description","type":"string"},{"name":"hscode","type":"bytes32"},{"name":"quantity","type":"uint256"},{"name":"weight","type":"uint256"},{"name":"origin","type":"bytes32"},{"name":"destination","type":"bytes32"},{"name":"startdate","type":"uint256"},{"name":"deadline","type":"uint256"},{"name":"payment","type":"uint256"},{"name":"penalty","type":"uint256"},{"name":"hash","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"escrow","outputs":[],"type":"function"},{"inputs":[{"name":"_name","type":"bytes32"},{"name":"_company","type":"bytes32"},{"name":"_addr","type":"bytes32"},{"name":"cargoname","type":"bytes32"},{"name":"_description","type":"string"},{"name":"_hscode","type":"bytes32"},{"name":"_quantity","type":"uint256"},{"name":"_weight","type":"uint256"},{"name":"_origin","type":"bytes32"},{"name":"_destination","type":"bytes32"},{"name":"_deadline","type":"uint256"},{"name":"_penalty","type":"uint256"},{"name":"_hash","type":"string"},{"name":"_vessel","type":"bytes32"},{"name":"_voyage","type":"bytes32"},{"name":"_booking","type":"bytes32"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"owner","type":"bytes32"},{"indexed":false,"name":"purchaser","type":"bytes32"}],"name":"newAgreement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"paymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"delayedShipment","type":"event"}]);

    var contract = shipmentContract.at(this.cargo.address);

    var filter = contract.paymentReleased({}, {fromBlock: 'latest', toBlock: 'latest'}, function(error, result) {
      if (!error) {
        console.log(result);
      }
    });

    contract.releasePayment({from: web3.eth.accounts[3], gas: 500000}, function(error, success) {
      if(!error) {
        console.log("Successfully sent transaction.", success);
        $('.submit_button').html('<span class="label label-primary cargo_input">Payment successfully released</span>');
      }
    })
  },
  'click #cargo_shipped': function() {
    $('#cargo_shipped').replaceWith('<div class="form-group"><h2>Anticipated Date of Arrival</h2><input id="dateofarrival" type="date" class="form-control inputArrival"><button id="submitDate" class="btn btn-lg btn-success shipment_button">Continue</button></div>');
  },
  'click #submitDate': function() {
    $('#shipment').html('<div class="cargo_header shipment_header"><h2>Cargo arrived at Port</h2><img src="/cargo.jpg" /><button id="disputePayment" class="btn btn-lg btn-danger shipment_button">Dispute Payment</button></div>');
  },
  'click #disputePayment': function() {
    var route = '/dispute/' + this._id;
    Router.go(route);
  }
})
