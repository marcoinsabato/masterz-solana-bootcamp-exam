# How to Use This Project

1. **Clone the Repository**: First, you need to clone the repository to your local machine. You can do this by running `git clone <repository-url>` in your terminal.

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies. If you're using a package manager like npm, you can do this by running `npm install`.

3. **Run the Project**: Once the dependencies are installed, you can run the project.

4. **Create the keypair**: Run the command `npm run keygen` and copy the secret key to the `wallet.json` file.

5. **Airdrop SOL on account**: Run the command `npm run airdrop` to airdrop SOL on the account.

6. **Create the Mint**: Run the command `npm run createMint` to create the mint. After the mint is created, you can see the mint address in the terminal. Copy the mint address and paste it in the `config/mintAddress.ts` file.

7. **Mint token**: Run the command `npm run mintToken` to mint the token. After the token is minted, you can see the token address in the terminal. Copy the token address and paste it in the `config/spl_transfer.ts` file in fromAta const.

8. **Transfer token**: Run the command `npm run transferToken` to transfer the token to the recipient. After the token is transferred, you can see the transaction signature in the terminal.
