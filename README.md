<h1 align="center"> 🦈 NFT Auction Contracts 🦈 </h1>

![shark](https://user-images.githubusercontent.com/51104905/129466162-1d730cbc-38dd-4232-83cc-0b889af097eb.gif)


### 📖📚 Brief description of project 📖📚
- Solidity v0.8
- Hardhat
- Environmental variables
    ```
    # https://infura.io
    INFURA_PROJECT_ID=

    # Wallet private key
    MNEMONIC="test test test ..."

    # https://etherscan.io
    ETHERSCAN_API_KEY=
    ```

<br />

### 1. How to deploy? 🛫 🛫 🛫 
```
npx hardhat compile
npx hardhat run --network [network] scripts/deploy.js
```

e.g.
```
npx hardhat compile
npx hardhat run --network rinkeby scripts/deploy.js
```
<br />

### 2. How to verify? ✅ ✅ ✅ 
```
npx hardhat verify --network [network] [contract address] [contract constructor arguments]
```

e.g.
```
npx hardhat verify --network rinkeby 0xeFa1000fe5809B829f1024e72364fAA0B0C4A720 "SharkNFT" "SNFT"

// if constructor doesn't have any arguments
npx hardhat verify --network rinkeby 0x44Afe45a323168d8fb89188c81e2f9f0301a10f4
```

<br />

### 3. Deployed contracts 🤑 🤑 🤑 
- SharkNFT contract: https://rinkeby.etherscan.io/address/0xeFa1000fe5809B829f1024e72364fAA0B0C4A720#code
- AuctionSea contract: https://rinkeby.etherscan.io/address/0x44Afe45a323168d8fb89188c81e2f9f0301a10f4#code


<br />
<br />

### Thanks 🙏🙏🙏
