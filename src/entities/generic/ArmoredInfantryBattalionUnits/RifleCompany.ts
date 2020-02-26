import Unit, {UnitClass} from '../../../Unit';
import {
	RifleCompanyHQ,
	AntiTankPlatoon,
	RiflePlatoon,
} from './RifleCompanyUnits';

export default class RifleCompany {
    constructor(id: string) {
        return new Unit(id, 'Rifle', UnitClass.Company, {
            subUnits: [
                new RifleCompanyHQ(),
                new AntiTankPlatoon(),
                new RiflePlatoon(1),
                new RiflePlatoon(2),
                new RiflePlatoon(3),
			]
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
