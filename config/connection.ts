import { Connection } from "@solana/web3.js";

// Creiamo una nuova connessione con il cluster di devnet di Solana

const connection = new Connection("https://api.devnet.solana.com", "finalized");

export default connection;