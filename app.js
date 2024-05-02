const ganacheUrl = 'http://localhost:7545';
const web3 = new Web3(new Web3.providers.HttpProvider(ganacheUrl));

const contract =  new web3.eth.Contract([
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "number",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "number",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "number",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					}
				],
				"internalType": "struct NewNote.user",
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
], '0x5147D0b5Bbb11e1D89916b9EcDC5d939ab657A68');


