import Unit, { UnitClass } from '../../Unit';
import {
	RifleCompany,
	ServiceCompany,
} from './ArmoredInfantryBattalionUnits';

export default class ArmoredInfantryBattalion {
	constructor(id: number) {
		return new Unit(id, 'Armored Infantry', UnitClass.Battalion, {
			subUnits: [
				// HQ & HQ Company 7-26,
				new RifleCompany([
					'A',
					'D',
					'G',
				][ id - 1 ]),
				new RifleCompany([
					'B',
					'E',
					'H',
				][ id - 1 ]),
				new RifleCompany([
					'C',
					'F',
					'I',
				][ id - 1 ]),
				new ServiceCompany(),
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-25',
		});
	}
}
