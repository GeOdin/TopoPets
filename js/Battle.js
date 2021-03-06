/* Battle.js
 * JavaScript file to arrange the battles of the TopoPets game
 * Made on 16-11-2015
 * by GeOdin
 *
 *========================================================
 * This JavaScript file includes the following variable: *
 *========================================================
 * * battleMoves
 * * weaknessResistance
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
 * createBattleMove(moveNumber, moveName, moveType1, moveType2, SPdamage, SPcost, TPdamage, TPcost, accuracy, description);
 */


var battleMoves = [
	// Possibly later: add effect, and possible stat it has effect on
	[
		"ID", //0
		"name", //1
		"type1", //2
		"type2", //3
		"SPdamage", //4
		"SPcost", //5
		"TPdamage", //6
		"TPcost", //7
		"accuracy", //8
		"description" //9
	],
	[
		"000", //0
		"", //1
		"", //2
		"", //3
		0, //4
		0, //5
		0, //6
		0, //7
		0, //8
		"" //9
	],
	[
		"001", //0
		"SLAM", //1
		"NORMAL", //2
		"", //3
		40, //4
		1, //5
		1.1, //6
		1, //7
		1, //8
		"It is a regular NORMAL move." //9
	],
	[
		"002", //0
		"BREEZE", //1
		"AIR", //2
		"", //3
		40, //4
		1, //5
		1.1, //6
		1, //7
		1, //8
		"It is a regular AIR move." //9
	],
	[
		"003", //0
		"THROW STONE", //1
		"EARTH", //2
		"", //3
		40, //4
		1, //5
		1.1, //6
		1, //7
		1, //8
		"It is a regular EARTH move." //9
	],
	[
		"004", //0
		"FLAME", //1
		"FIRE", //2
		"", //3
		40, //4
		1, //5
		1.1, //6
		1, //7
		1, //8
		"It is a regular FIRE move." //9
	],
	[
		"005", //0
		"BUBBLE", //1
		"WATER", //2
		"", //3
		40, //4
		1, //5
		1.1, //6
		1, //7
		1, //8
		"It is a regular WATER move." //9
	],
	[
		"006", //0
		"THROW RUNES", //1
		"SPIRIT", //2
		"", //3
		40, //4
		1, //5
		1.1, //6
		1, //7
		1, //8
		"It is a regular SPIRIT move." //9
	]
];

var weaknessResistance = [
/*
 *==============================
 * Weaknesses and resistances: *
 *==============================
 * * Row (horizontal) : Attacking TopoPet
 * * Column (vertical): Defending TopoPet
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *         * Normal  *   Air   *  Earth  *  Fire   *  Water  * Spirit  *Total (6)*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Normal  *   0.5   *    1    *    1    *    1    *    1    *    2    *    6    * x
 * Air     *    1    *    2    *    2    *   0.5   *    1    *   0.5   *    6    * x
 * Earth   *    1    *   0.5   *    1    *    2    *    1    *    1    *    6    * x
 * Fire    *    2    *    1    *   0.5   *    1    *   0.5   *    2    *    6    * x
 * Water   *    1    *   0.5   *    2    *    2    *    1    *   0.5   *    6    * x
 * Spirit  *    1    *    2    *   0.5   *   0.5   *    2    *    1    *    6    * x
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Total(6)*    6    *    6    *    6    *    6    *    6    *    6    *         *
 *         *    x    *    x    *    x    *    x    *    x    *    x    *         *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
	["AttackingTypeVsDefendingType", "NORMAL", "AIR", "EARTH", "FIRE", "WATER", "SPIRIT"],
	["NORMAL", 0.5, 1, 1, 1, 1, 2],
	["AIR", 1, 2, 2, 0.5, 1, 0.5],
	["EARTH", 1, 0.5, 1, 2, 1, 1],
	["FIRE", 2, 1, 0.5, 1, 0.5, 2],
	["WATER", 1, 0.5, 2, 2, 1, 0.5],
	["SPIRIT", 1, 2, 0.5, 0.5, 2, 1]
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// createBattleMove(moveNumber, moveName, moveType1, moveType2, SPdamage, SPcost, TPdamage, TPcost, accuracy, description) //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to create a TopoPet battle move object

function createBattleMove(moveNumber, moveName, moveType1, moveType2, SPdamage, SPcost, TPdamage, TPcost, accuracy, description) {
	this.number = moveNumber;
	this.Name = moveName;
	this.type1 = moveType1;
	this.type2 = moveType2;
	this.SPdamage = SPdamage;
	this.SPcost = SPcost;
	this.TPdamage = TPdamage;
	this.TPcost = TPcost;
	this.accuracy = accuracy;
	this.description = description;
}
