import Unit, { UnitClass } from '../Unit';
import ArmoredInfantryBattalion from './generic/ArmoredInfantryBattalion';

export default new Unit(2, 'Armored', UnitClass.Division, {
	subUnits: [
		// Headquarters Company
		// Service Company
		// Combat Command A
		// Combat Command B
		new Unit(41, 'Armored Infantry', UnitClass.Regiment, {
			subUnits: [
				// Regiment HQ & HQ Company
				new ArmoredInfantryBattalion(1),
				new ArmoredInfantryBattalion(2),
				new ArmoredInfantryBattalion(3),
				// Cannon Company
				// Anti Tank Company
				// Service Company
				// Medical Detatchment
			],
		}, {
			date: new Date(1940, 7, 15),
			name: 'Order of Battle',
		}),
		// 66th Armored Regiment
		// 67th Armored Regiment
		// 17th Armored Engineer Battalion
		// 82d Armored Reconnaissance Battalion
		// 142d Armored Signal Company
		// 2d Armored Division Artillery
		// 		14th Armored Field Artillery Battalion
		// 		78th Armored Field Artillery Battalion
		// 		92d Armored Field Artillery Battalion
		// 2d Armored Division Trains
		// 		2d Ordnance Maintenance Battalion
		// Supply Battalion
		// 48th Armored Medical Battalion
		// Military Police Platoon
	],
}, {
	date: new Date(1940, 1, 1),
	name: 'Order of Battle',
});
