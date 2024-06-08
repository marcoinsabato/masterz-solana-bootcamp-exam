import { Keypair } from "@solana/web3.js";

// Generate a new keypair
const keypair = Keypair.generate();

console.log(`You have generated your new wallet: ${keypair.publicKey.toBase58()} \n\n Copy and paste the following JSON into a file like "wallet.json" in the main directory: [${keypair.secretKey}]`)
