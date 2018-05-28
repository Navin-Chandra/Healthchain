# Healthchain

Healthchain is a blockchain application build on top of Hyperledger composer / Fabric network on a windows machine

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The below are the set of softwares required to run the application

1. curl version 7.59
2. node version 8.X
3. npm version 5.6.X
4. docker tool box along with oracle virutal box
5. cygwin
6. Hyperledger Composer/Fabric
 
### Installing

1. Install the above softwares
2. Download or clone this project
3. To install the Hyperledger Composer / Fabric follow the instruction from the below URL (https://hyperledger.github.io/composer/latest/installing/installing-index.html)

### Running

1. Start the docker by clicking on Docker Quick Start Terminal
2. Navigate to the path where you have downloaded the HyperledgerFabric
3. Run the below command
```
.\startFabric.sh
```
This would start the Fabric network

4. Now open the cygwin terminal for the same path and type the below command
```
\.creatPeerAdminCard.sh
```
Once the peer admin card has been created, Navigate to the path where you have downloaded / cloned the project

5. Type the below command to generate the business network archive file
```
composer archive create -t dir -n .
```
6. On success on the above command, type the below to install the business network
```
composer network install --card PeerAdmin@hlfv1 --archiveFile healthchain-network\@0.0.6.bna
```
7. Now start the network
```
composer network start --networkName healthchain-network --networkVersion 0.0.6 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```
8. Start the rest server using the below command, select No for all the security related question and for the namespace choose 'never user namespace'

```
composer-rest-server
```

9. You can expose the project as an angular js app by the below command

```
yo hyperledger-composer
```
