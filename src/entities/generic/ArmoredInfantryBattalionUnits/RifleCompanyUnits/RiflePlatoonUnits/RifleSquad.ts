import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, {UnitClass} from '../../../../../Unit';

export default class RifleSquad {
    constructor() {
        return new Unit(null, 'Rifle', UnitClass.Squad, {
            personnel: [
                {
                    role: ['squad_leader'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.staffSergeant,
                    ]
                },
                {
                    role: ['assistant_squad_leader'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.sergeant
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['half_track_driver'],
                    equipment: [
                        equipment.smg45calM3,
                    ],
                    rank: [
                        ranks.technicianGrade5,
                    ]
                }
            ],
            equipment: [
                equipment.rocketLauncherM9,
                equipment.grenadeLauncherM7,
                equipment.grenadeLauncherM7,
            ],
            vehicles: [
                {
                    type: vehicles.halfTrackM3A2,
                    armament: [
                        equipment.mg30calM1917A1,
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
