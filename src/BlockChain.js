import { Block } from "./Block.js";
import { calculateHash } from "./calcHash.js";

class BlockChain {
    constructor(genesisBlock, arrChain, difficulty) {
        this.genesisBlock = genesisBlock;
        this.arrChain = arrChain;
        this.difficulty = difficulty;
    }

    static create(difficulty) {
        const genesisBlock = new Block(null);
        return new BlockChain(genesisBlock, [genesisBlock], difficulty);
    }

    addBlock(from, to, amount) {
        const blockData = { from, to, amount };
        const lastBlock = this.arrChain[this.arrChain.length - 1];
        const newBlock = new Block(blockData, lastBlock.hash);
    
        newBlock.mine(this.difficulty);
    
        this.arrChain.push(newBlock);
    }

    isValid() {
        if (this.arrChain.length === 1) return true;
    
        for (let index = 1; index < this.arrChain.length; index++) {
            const currentBlock = this.arrChain[index];
            const previousBlock = this.arrChain[index - 1];
            if (currentBlock.hash !== calculateHash(currentBlock)
                || previousBlock.hash !== currentBlock.prevHash) {
                return false;
            }
        }
        
        return true;
    }
}

export { BlockChain };