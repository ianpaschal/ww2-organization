import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, {UnitClass} from '../../../../../Unit';

export default class MortarSquad {
    constructor() {
        return new Unit(null, 'Mortar', UnitClass.Squad, {
            personnel: [
                {
                    role: ['squad_leader'],
                    equipment: [
                        equipment.carbine30calM1
                    ],
                    rank: [
                        ranks.staffSergeant,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['rifleman'],
                    equipment: [
                        equipment.rifle30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['mortar_gunner'],
                    equipment: [
                        equipment.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['ammunition_handler'],
                    equipment: [
                        equipment.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['mortar_gunner'],
                    equipment: [
                        equipment.carbine30calM1
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
                {
                    role: ['ammunition_handler'],
                    equipment: [
                        equipment.carbine30calM1
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
                equipment.mortar60mmM2,
                equipment.reelEquipmentCE11,
                equipment.telephoneEE8,
                equipment.telephoneEE8,
            ],
            vehicles: [
                {
                    type: vehicles.halfTrackM3A2,
                    armament: [
                        equipment.mg30calM1917A1,
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
