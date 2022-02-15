import { calculateHash } from "./calcHash.js";

class Block {
    constructor(data, prevHash) {
        this.data = data;
        this.hash = "0";
        this.prevHash = prevHash;
        this.timestamp = new Date();
        this.pow = 0;
    }

    mine(difficulty) {
        const regex = new RegExp(`^(0){${difficulty}}.*`);

        while (!this.hash.match(regex)) {
            this.pow++;
            this.hash = calculateHash(this);
        }
    }
}

export { Block };