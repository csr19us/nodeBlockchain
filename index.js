const BlockChain = require('./src/BlockChain.js');
const BlockChain_create = require('./src/BlockChain.js').create;



const blockchain = BlockChain_create(2); // difficulty increases exponentially with each increase
blockchain.addBlock("Alice", "Bob", 5);
blockchain.addBlock("John", "Doe", 100);

console.log(blockchain);

console.log(blockchain.isValid()); // true - since we haven't tampered with it

blockchain.arrChain[1].data.amount = 200; // tampering with the blockchain
console.log(blockchain.isValid()); // false - tampered with the blockchain
