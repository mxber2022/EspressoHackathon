import { ethers } from 'ethers'
;(async () => {
  const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8547') // Rollup RPC URL
  const signer = new ethers.Wallet(
    '4311f71b5ccbb821fbd59188d63ae9c624acb3bc9ed12bce62f1f8139cdeea15',
    provider
  )

  const tx = await signer.sendTransaction({
    to: '0x9647f8990CB5aa9cEa2c8adbCB49E7CF9000Ed6d',
    value: ethers.parseUnits('1', 'wei'),
    gasPrice: ethers.parseUnits('1', 'gwei'),
    gasLimit: 26000,
  })
  console.log(tx)
})()
