import { equipment, ranks, vehicles, weapons } from '../../terminology';
import Unit, {UnitClass} from '../../Unit';

export default class MortarSquad {
    constructor() {
        return new Unit(null, 'Mortar', UnitClass.Squad, {
            personnel: [
                {
                    role: 'squad_leader',
                    equipment: [
                        weapons.carbine30calM1
                    ],
                    rank: [
                        ranks.staffSergeant,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'mortar_gunner',
                    equipment: [
                        weapons.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'ammunition_handler',
                    equipment: [
                        weapons.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'mortar_gunner',
                    equipment: [
                        weapons.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'ammunition_handler',
                    equipment: [
                        weapons.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'driver',
                    equipment: [
                        weapons.smg45calM3,
                    ],
                    rank: [
                        ranks.technicianGrade5,
                    ]
                }
            ],
            equipment: [
                weapons.rocketLauncherM9,
                weapons.mortar60mmM2,
                equipment.reelEquipmentCE11,
                equipment.telephoneEE8,
                equipment.telephoneEE8,
            ],
            vehicles: [
                {
                    type: vehicles.halfTrackM3A2,
                    armament: [
                        weapons.mg30calM1917A1,
                    ],
                    equipment: []
                }
            ]
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}