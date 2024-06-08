import { createMint } from "@solana/spl-token";
import keypair from "../config/keypair";
import connection from "../config/connection";

(async () => {

    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        6,
    );

    console.log("Insert the in config/mintAddress.ts file \n\nMint Address:", mint.toBase58());
})()