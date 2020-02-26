import Unit, { UnitClass } from '../../Unit';
import {
	RifleCompany
} from './ArmoredInfantryBattalionUnits';

export default class ArmoredInfantryBattalion {
    constructor(id: number) {
		const companyLetters = {
			1: ['A', 'B', 'C'],
			2: ['D', 'E', 'F'],
			3: ['G', 'H', 'I'],
		}
        return new Unit(id, 'Armored Infantry', UnitClass.Battalion, {
            subUnits: [
				// HQ & HQ Company 7-26
                new RifleCompany(companyLetters[id][0]),
                new RifleCompany(companyLetters[id][1]),
				new RifleCompany(companyLetters[id][2]),
				// Service Company 7-29
            ],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-25',
        });
    }
}
