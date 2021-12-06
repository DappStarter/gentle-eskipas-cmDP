require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan razor soap honey idea argue slot gaze'; 
let testAccounts = [
"0x753b006f2e502c68dfce81ede122609e2f1726fcb3ab7aecd3b612c2d02ae751",
"0x4c51f38bb1c5dd6d6e2dd576b018b08c36fac68f94c83c91334a13175af9f8d6",
"0xa79377efc5d8e8186026e3ce7cb81c48e56311d8c0e812beefb25206a564c2d2",
"0x1aa49c6ff74b83696109fd67961602ceb7f35ce1ddca33d9de5d69824f355555",
"0xfa37bc61be96b7655d5f9056770cd0251934006ec3cc305e29e9bf696851d7c4",
"0x039c560fe5714d562b19f26b2f4ce9863736522dda24b0b21e91954bb2a7f920",
"0x00997d590af44db441e022084de7b5f83984a0fde7c1e79e7f37af71e009764d",
"0x822d18e89c365b6669d82571c199bd57b11ee5e118f43e86b09913f7e8b433e7",
"0x4f2682e667f09d52883476b893c28a6c83a8375bdd4d3a0a8f922abf413818a9",
"0x87fc89f798fbd5851cfa6ad21ac3d457ba6f700fbc71c96e486e7bf9da0fea24"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


