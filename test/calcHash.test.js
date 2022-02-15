const crypto = require('crypto');
const Block = require('../src/Block.js');
const calculateHash = require('../src/calcHash.js');

test('Calculation of a hash', () => {
    // Create a genesis block to start with (will have our previous block's hash)
    const prevBlock = new Block(null);
    
    // Configure a new block's data property
    const data = {};
    data[0] = "Alice";
    data[1] = "Bob";
    data[2] = 5;

    // Create new block
    const nextBlock = new Block(data, prevBlock.hash);
    
    // Manually assemble a string to hash that has equivalent data as the new block we created
    const strToHash = 
        JSON.stringify(nextBlock.data) +    //data (as a string)
        prevBlock.hash +                    //previous block's hash
        nextBlock.timestamp.toISOString() + //timestamp (as Date object which prints as string)
        nextBlock.pow.toString();           //power (difficulty)

    // Generate an expected hash based on the block config/data defined
    const expectedHash = crypto.createHash("sha256").update(strToHash).digest("hex");

    expect(calculateHash(nextBlock)).toBe(expectedHash);
});