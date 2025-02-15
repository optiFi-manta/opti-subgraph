# 📊 OptiFinance Subgraph

The **OptiFinance Subgraph** is an indexing solution for blockchain data, allowing efficient querying of events and transactions from smart contracts deployed on the **Base Sepolia** testnet. This subgraph powers the analytics and monitoring features of the OptiFinance platform.

## 🚀 Features
- Indexes key DeFi interactions, including deposits, withdrawals, swaps, and staking.
- Tracks real-time portfolio changes across multiple DeFi protocols.
- Supports multiple staking protocols like **Uniswap, Aave V3, Compound V3, Stargate V3**, and **USDX Money**.
- Provides fast and structured data access for frontend applications.

## 🔧 Setup & Deployment

### 1️⃣ Install Dependencies
Ensure you have **Node.js** and **Graph CLI** installed:
```sh
npm install -g @graphprotocol/graph-cli
```

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/opti-finance-subgraph.git
cd opti-finance-subgraph
```

### 3️⃣ Generate & Build
```sh
yarn codegen
yarn build
```

### 4️⃣ Deploy to The Graph
Replace `<YOUR_SUBGRAPH_NAME>` with your subgraph identifier:
```sh
graph auth --product hosted-service <ACCESS_TOKEN>
graph deploy --product hosted-service <YOUR_GITHUB_USERNAME>/<YOUR_SUBGRAPH_NAME>
```

## 📜 Schema & Data Sources
The subgraph listens to events emitted by the following smart contracts on **Base Sepolia**:

### 🏦 OptiFinance Smart Contract
- **Address:** `0x9F7b08e2365BFf594C4227752741Cb696B9b6E71`
- **Indexed Events:**
  - `Deposit`
  - `OwnershipTransferred`
  - `Paused`
  - `Swap`
  - `Unpaused`
  - `Withdrawal`

### 💰 Staking Contracts
| Protocol | Address |
|----------|---------------------------------|
| Uniswap  | `0xa42A86906D3FDfFE7ccc1a4E143e5Ddd8dF0Cf83` |
| Aave V3  | `0x5dC10711C60dd5174306aEC6Fb1c78b895C9fA5A` |
| Compound V3 | `0xD1b1954896009800dF01b197A6E8E1d98FF44ae8` |
| Stargate V3 | `0x0CAf83Ef2BA9242F174FCE98E30B9ceba299aaa3` |
| USDX Money | `0x6c36eD76d3FF0A7C0309aef473052b487895Fadf` |

### 📌 Stablecoin & Token Contracts
| Token | Address |
|--------|---------------------------------|
| USDC   | `0x0E8Ac3cc5183A243FcbA007136135A14831fDA99` |
| USDT   | `0xbF1876d7643a1d7DA52C7B8a67e7D86aeeAA12A6` |
| DAI    | `0x134C06B12eA6b1c7419a08085E0de6bDA9A16dA2` |
| WETH   | `0xD1d25fc5faC3cd5EE2daFE6292C5DFC16057D4d1` |
| UNI    | `0x1eaC9BB63f8673906dBb75874356E33Ab7d5D780` |

## 🛠 Event Handlers
Each contract has corresponding event handlers for listening to key transactions.
For example, the `Deposit` event in **OptiFinance** contract is handled by:
```typescript
export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
```

## 📡 Querying the Subgraph
Once deployed, you can query the indexed data using **GraphQL**.
Example query to fetch all deposits:
```graphql
{
  deposits {
    id
    user
    amount
  }
}
```

## 📌 Notes
- This subgraph is deployed on **Base Sepolia**, a Layer 2 testnet.
- **Mock tokens** are used for testing during the hackathon.
- Security enhancements and optimizations are ongoing.

## 📝 License
This project is licensed under the MIT License.

---

💡 **Contribute & Connect:** If you're interested in contributing or discussing improvements, feel free to **open an issue** or reach out! 🚀

