import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import keypair from "../config/keypair";
import connection from "../config/connection";

/*
    requestAirdrop:

    requestAirdrop(
        to: PublicKey, 
        lamports: number
    ): Promise<TransactionSignature>;

    - to: Indirizzo del wallet a cui inviare i fondi
    - lamports: Quantità di SOL richiesta (1 SOL = 1_000_000_000 LAMPORTS)

*/

(async () => {
    try {
        
        const airdropSignature = await connection.requestAirdrop(
            keypair.publicKey,
            2 * LAMPORTS_PER_SOL    // SOL quantity
        );

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);
    } catch (error) {
        console.error(error);
    }
})();

