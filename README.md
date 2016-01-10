![alt tag](/presentation/header.png)

# CargoChain

CargoChain is a settlement platform that provides a secure, trustless and efficient Chain of Custody. With CargoChain we intend to improve international trade, especially the shipping industry. CargoChain provides importers, exporters, shipping companies and customs an easy to use interface to view the necessary information associated to cargo.

The biggest advantage of CargoChain is that it offers a single point of review for all involved parties. This way the necessary documents do not have to be sent to all parties but are instead uploaded to the Blockchain/IPFS for further verification and review. Not only does this significantly increase efficiency, reduce costs and increase speed of shipping, but it also saves a lot of trees (which makes pandas happy).

![alt tag](http://res.cloudinary.com/hqmmvj8vi/image/upload/v1452393110/nickkilla/fea447c8cdfe0ae3f8366e3249c5aef7-11113.jpg)

# The Stack

CargoChain is built with `Meteor`, using `Ethereum` and `IPFS` as the underlying technologies to handle contractual relations and the "eternification" of documents. In the future we intend to include Factom as an additional source to store document hashes at for further security/verification.

# File Structure

The project is structured in multiple folders

* **/app:** Main folder that contains all the Meteor related files
* **/contract:** Contains the smart contract
* **/presentation:** Contains our presentation and the related documents (for shipping)

## Prerequisites

* **Ethereum:** You need to have Ethereum Node with RPC running and unlock your main account. To run it, enter `geth --rpc --rpccorsdomain="http://localhost:3000" --unlock 0 console`
* **IPFS:** Run the daemon `ipfs daemon`
* **Meteor:** You obviously need to have Meteor installed, just go to meteor.com to get it.

# How to Run

Inside the `app` folder (with an Ethereum node running), simply type `meteor` and the app should automatically be available at `http://localhost:3000`. Feel free to play around with it and test all the functions :)
