import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, {UnitClass} from '../../../../../Unit';

export default class AntiTankPlatoonHQ {
    constructor() {
        return new Unit(null, 'Anti-Tank', UnitClass.PlatoonHQ, {
            personnel: [
                {
                    role: ['platoon_commander'],
                    equipment: [
                        equipment.carbine30calM1,
                    ],
                    rank: [
                        ranks.firstLieutenant,
                        ranks.secondLieutenant,
                    ]
				},
				{
					role: ['platoon_technical_sergeant'],
                    equipment: [
                        equipment.carbine30calM1,
                    ],
                    rank: [
                        ranks.technicalSergeant,
                    ]
				},
				{
					role: ['messenger'],
                    equipment: [
                        equipment.smg45calM3,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				}
            ],
            equipment: [],
            vehicles: [
				{
					type: vehicles.truck1_4ton4x4,
					armament: [],
					equipment: [
						equipment.grenadeLauncherM8,
						equipment.radioSetSCR510,
					]
				}
            ],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
