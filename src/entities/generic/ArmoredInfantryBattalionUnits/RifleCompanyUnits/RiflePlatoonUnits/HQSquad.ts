import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, {UnitClass} from '../../../../../Unit';

export default class HQSquad {
    constructor() {
        return new Unit(null, 'HQ', UnitClass.Squad, {
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
                        equipment.rifle30calM1,
                    ],
                    rank: [
                        ranks.technicalSergeant,
                    ]
                },
                {
                    role: ['squad_leader'],
                    equipment: [
                        equipment.carbine30calM1,
                    ],
                    rank: [
                        ranks.staffSergeant,
                    ]
                },
                {
                    role: ['sniper'],
                    equipment: [
                        equipment.rifle30calM1903A4,
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
                equipment.grenadeLauncherM7,
                equipment.grenadeLauncherM7,
                equipment.rocketLauncherM9,
            ],
            vehicles: [
                {
                    type: vehicles.halfTrackM3A2,
                    armament: [
                        equipment.mg50calM2HB,
                    ],
                    equipment: [
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