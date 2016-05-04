// Browser environment
if(typeof window !== 'undefined') {
    WalletAccountsNode = (typeof window.WalletAccountsNode !== 'undefined') ? window.WalletAccountsNode : require('ethereumjs-accounts-meteor');
}


// Node environment
if(typeof global !== 'undefined') {
    WalletAccountsNode = (typeof global.WalletAccountsNode !== 'undefined') ? global.WalletAccountsNode : require('ethereumjs-accounts-meteor');
}