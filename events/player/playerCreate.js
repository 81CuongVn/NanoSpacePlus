const { white, green }= require("chalk");

module.exports = async (client, player) => {
	console.log(white('[') + green('DEBUG') + white('] ') + green('Player Created from (') + white(`${player.guild}`) + green(')'));
}