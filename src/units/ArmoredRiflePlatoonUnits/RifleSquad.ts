import { equipment, ranks, vehicles, weapons } from '../../terminology';
import Unit, {UnitClass} from '../../Unit';

export default class RifleSquad {
    constructor() {
        return new Unit(null, 'rifle', UnitClass.Squad, {
            personnel: [
                {
                    role: 'squad_leader',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.staffSergeant,
                    ]
                },
                {
                    role: 'assistant_squad_leader',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.sergeant
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: 'rifleman',
                    equipment: [
                        weapons.rifle30calM1,
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
                weapons.grenadeLauncherM7,
                weapons.grenadeLauncherM7,
            ],
            vehicles: [
                {
                    type: vehicles.halfTrackM3A2,
                    armament: [
                        weapons.mg30calM1917A1,
                    ],
                    equipment: [],
                },
            ],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}