import Unit, { UnitClass } from '../Unit';
import ArmoredInfantryBattalion from './generic/ArmoredInfantryBattalion';

export default new Unit(2, 'Armored', UnitClass.Division, {
	subUnits: [
		new Unit(41, 'Armored Infantry', UnitClass.Regiment, {
			subUnits: [
				new ArmoredInfantryBattalion(1),
				new ArmoredInfantryBattalion(2),
				new ArmoredInfantryBattalion(3),
			],
		}, {
			date: new Date(),
			name: 'Order of Battle',
		}),
	],
}, {
	date: new Date(),
	name: 'Order of Battle',
});
