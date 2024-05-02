// eslint-disable-next-line no-undef
const NewNote = artifacts.require("NewNote");

module.exports = function (deployer) {
	const ethereumAddress = '0x2fD1bED3a382BF5cFCD0db94527e8041B9AAC540';
	
	deployer.deploy(NewNote, ethereumAddress);
};
