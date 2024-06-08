import { Keypair } from "@solana/web3.js";
import wallet from "../wallet.json";

// Create a new instance of Keypair by passing the private key of our wallet as an argument
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

export default keypair;