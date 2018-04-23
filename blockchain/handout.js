BCCToken.deployed().then(instance => {bcctoken = instance; console.log("Ready");})
BCCRoomBooking.deployed().then(instance => {roomBooking = instance; console.log("Ready");})

var acct0 = web3.eth.accounts[0]
var acct1 = web3.eth.accounts[1]



roomBooking.offerRoom("Seabook Room", "Seabook Room's Description", "Large", 99)
roomBooking.getRoomsForBooking()

var logAddressbcctoken = bcctoken.LogAddress({fromBlock: 0, toBlock: 'latest'});
logAddressbcctoken.watch(function(error, result) {console.log("bcctoken | LogAddress");console.log(result.args);});

var logUnitbcctoken = bcctoken.LogUint({fromBlock: 0, toBlock: 'latest'});
logUnitbcctoken.watch(function(error, result) {console.log("bcctoken | LogUint");console.log(result.args);});

bcctoken.balanceOf(acct0)
bcctoken.balanceOf(acct1)


roomBooking.purchaseTokens({from: acct1,"value":web3.toWei(1,"ether")})

//roomBooking.purchaseTokens({from: acct1,"value":web3.toWei(1,"ether"),"gas":web3.toWei(.1,"ether")})

bcctoken.balanceOf(acct0)
bcctoken.transfer(acct1, 1000)
bcctoken.balanceOf(acct1)


1 eth = 100 BCC
1 eth = 1000000000000000000 wei


1 BCC = 10000000000000000 wei




444  cd /Users/rkc/Projects/bcc\-dapp\-scaffolding
445  npm i
446  ls -altr
447  mkdir bcc-private-chain
448   cd bcc-private-chain/
449  mkdir private
450  pwd
451  ls -l
452  cd private/
453  code .
454  open .
455  cd /Users/rkc/Projects/bcc-private-chain/private 
456  cd ..
457  cd /Users/rkc/Projects/bcc-private-chain/private 
458  pwd
459  puppeth 
460  puppeth --version
461  cd ..
462  code .
463  code ~/.puppeth/bccprivatechain
464  code ~/.puppeth
465  puppeth -version
466  puppeth 
467  geth --datadir=. init bccprivatechain.json 
468  ls
469  geth --datadir=. account new
470  geth --datadir=. account new
471  geth --datadir=. account new
472  geth --datadir=. account list
473  geth --networkid 555 --mine --minerthreads 1 -- datadir . --nodiscover --rpc --rpcaddress=192.168.15.18 --rpcport 8545 --port 30303 --rpccorsdomain "*" --nat "any" --rpcapi "eth,web3,personal,net" --unlock 0 --password ./password.text --ipcpath 
474  geth --networkid 555 --mine --minerthreads 1 -- datadir . --nodiscover --rpc --rpcaddress=192.168.15.18 --rpcport 8545 --port 30303 --rpccorsdomain "*" --nat "any" --rpcapi "eth,web3,personal,net" --unlock 0 --password ./password.text --ipcpath "~/Library/Ethereum/geth.ipc"
475  geth --networkid 555 --mine --minerthreads 1 -- datadir . --nodiscover --rpc --rpcaddress=192.168.15.18 --rpcport 8545 --port 30303 --rpccorsdomain "*" --nat "any" --rpcapi "eth,web3,personal,net" --unlock 0 --password ./password.text --ipcpath "~/Library/Ethereum/geth.ipc"
476  5/.\//
477  geth --networkid 1234 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.12" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.sec --ipcpath "~/Library/Ethereum/geth.ipc"
478  geth --networkid 1234 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.18" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.sec --ipcpath "~/Library/Ethereum/geth.ipc"
479  geth --networkid 1234 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.18" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.txt --ipcpath "~/Library/Ethereum/geth.ipc"
480  geth --networkid 555 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.18" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.txt --ipcpath "~/Library/Ethereum/geth.ipc"
481  geth --networkid 555 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.18" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.sec --ipcpath "~/Library/Ethereum/geth.ipc"
482  geth --networkid 555 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.18" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.sec --ipcpath "~/Library/Ethereum/geth.ipc"
483  geth --networkid 555 --mine --minerthreads 1 --datadir . --nodiscover --rpc --rpcaddr "192.168.15.18" --rpcport "8545" --port "30303" --rpccorsdomain "*" --nat "any" --rpcapi eth,web3,personal,net --unlock 0 --password ./password.sec --ipcpath "~/Library/Ethereum/geth.ipc"
