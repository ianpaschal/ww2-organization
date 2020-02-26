import Unit, {UnitClass} from '../../../../Unit';
import { equipment } from '../../../../terminology';
import {
	HQSquad,
	RifleSquad,
	MortarSquad,
	LMGSquad,
} from './RiflePlatoonUnits';

export default class RiflePlatoon {
    constructor(id: number) {
        return new Unit(id, 'Rifle', UnitClass.Platoon, {
            subUnits: [
                new HQSquad(),
                new RifleSquad(),
                new RifleSquad(),
                new MortarSquad(),
                new LMGSquad(),
            ],
			equipment: [
				equipment.radioSetSCR536,
			],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
