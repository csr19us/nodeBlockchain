import { BlockChain } from "./src/BlockChain.js";

const blockchain = BlockChain.create(4); // difficulty increases exponentially with each increase
blockchain.addBlock("Alice", "Bob", 5);
blockchain.addBlock("John", "Doe", 100);

console.log(blockchain);

console.log(blockchain.isValid()); // true - since we haven't tampered with it

blockchain.arrChain[1].data.amount = 200; // tampering with the blockchain
console.log(blockchain.isValid()); // false - tampered with the blockchain
