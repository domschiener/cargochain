contract Shipment {
  // Metainformation owner of Cargo
  struct Seller {
    bytes32 name;
    bytes32 company;
    bytes32 addr;
    address account;
  }

  // Basic information of shipper
  struct Buyer {
    bytes32 name;
    bytes32 company;
    bytes32 addr;
    address account;
    bool paid;
  }

  // Details of Cargo, including destination and payment
  struct Cargo {
    bytes32 name;
    string description;
    bytes32 hscode;
    uint quantity;
    uint weight;

    bytes32 origin;
    bytes32 destination;
    uint startdate;
    uint deadline;
    uint payment;
    uint penalty;
    string hash;
  }

  struct Shipping {
    bytes32 vessel;
    bytes32 voyage;
    bytes32 booking;

    bool active;
  }

  Seller seller;
  Cargo public cargo;
  Shipping public ship;
  Buyer buyer;

  // Events, used to keep track of progress
  event newAgreement(string s, bytes32 owner, bytes32 purchaser);
  event paymentReleased(string s, uint amount);
  event delayedShipment(string s, uint amount);

  function Shipment(bytes32 _name,
                    bytes32 _company,
                    bytes32 _addr,
                    bytes32 cargoname,
                    string _description,
                    bytes32 _hscode,
                    uint _quantity,
                    uint _weight,
                    bytes32 _origin,
                    bytes32 _destination,
                    uint _deadline,
                    uint _penalty,
                    string _hash,
                    bytes32 _vessel,
                    bytes32 _voyage,
                    bytes32 _booking) {
    seller.name = _name;
    seller.company = _company;
    seller.addr = _addr;
    seller.account = msg.sender;

    cargo.name = cargoname;
    cargo.description = _description;
    cargo.hscode = _hscode;
    cargo.quantity = _quantity;
    cargo.weight = _weight;

    cargo.origin = _origin;
    cargo.destination = _destination;
    cargo.deadline = _deadline;
    cargo.penalty = _penalty;
    cargo.hash = _hash;

    ship.vessel = _vessel;
    ship.voyage = _voyage;
    ship.booking = _booking;
    ship.active = false;
  }

  function agreement(bytes32 _name, bytes32 _company, bytes32 _addr) {
    buyer.name = _name;
    buyer.company = _company;
    buyer.addr = _addr;
    buyer.account = msg.sender;
    cargo.payment = msg.value;
    buyer.paid = false;

    cargo.startdate = block.timestamp;
    ship.active = true;

    newAgreement("New Agreement between two Parties!", seller.name, buyer.name);
  }

  function escrow() {
    if (buyer.paid) {
      throw;
    }
    if (cargo.startdate + (60 * 60 * 72) >= block.timestamp) {
      releasePayment();
    }
  }

  function releasePayment() {
    if (buyer.paid) {
      throw;
    }
    seller.account.send(cargo.payment);
    buyer.paid = true;
    paymentReleased("Payment released!", cargo.payment);
  }

  function arrival() {
    uint delay = block.timestamp - cargo.deadline;
    uint day = 60 * 60 * 24;
    uint totaldelay = 0;

    if (delay >= day) {
      totaldelay = delay / day;
      uint penalty = totaldelay * cargo.penalty;
      delayedShipment("The shipment has arrived late. Delay penalty will be charged.", penalty);
    }
  }
}
