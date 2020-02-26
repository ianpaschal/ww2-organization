import Unit, {UnitClass} from '../../../../Unit';
import { equipment } from '../../../../terminology';
import {
	AntiTankPlatoonHQ,
	AntiTankSquad,
} from './AntiTankPlatoonUnits';

export default class AntiTankPlatoon {
    constructor() {
        return new Unit(null, 'Anti-Tank', UnitClass.Platoon, {
            subUnits: [
                new AntiTankPlatoonHQ(),
                new AntiTankSquad(false), // Doesn't mount .50-cl MG
                new AntiTankSquad(),
                new AntiTankSquad(),
			],
			equipment: [
				equipment.radioSetSCR536,
			]
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
