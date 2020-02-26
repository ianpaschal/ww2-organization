import ArmoredRiflePlatoon from './ArmoredRiflePlatoon';
import Unit, {UnitClass} from '../Unit';

export default class ArmoredRifleCompany {
    constructor(id: string) {
        return new Unit(id, 'Armored Rifle', UnitClass.Company, {
            subUnits: [
                // 'CompanyHQ',
                // 'AntiTankPlatoon',
                new ArmoredRiflePlatoon(1),
                new ArmoredRiflePlatoon(2),
                new ArmoredRiflePlatoon(3),
            ],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}