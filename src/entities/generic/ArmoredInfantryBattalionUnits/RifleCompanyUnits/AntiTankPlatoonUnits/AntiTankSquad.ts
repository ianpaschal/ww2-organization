import { equipment, ranks, vehicles, weapons } from '../../../../../terminology';
import Unit, {UnitClass} from '../../../../../Unit';

export default class AntiTankSquad {
    constructor(uses50calMG: boolean = false) {
        return new Unit(null, 'Anti-Tank', UnitClass.Squad, {
            personnel: [
                {
                    role: 'squad_leader',
                    equipment: [
                        weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.staffSergeant,
                    ]
				},
				{
					role: 'gunner_anti_tank',
                    equipment: [
                        weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.corporal,
                    ]
				},
				{
					role: 'cannoneer',
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
					role: 'cannoneer',
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
					role: 'cannoneer',
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
					role: 'cannoneer',
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
					role: 'handler_ammunition',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
					role: 'handler_ammunition',
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
					role: 'handler_ammunition',
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
                        weapons.smg45calM3
                    ],
                    rank: [
                        ranks.technicianGrade5,
                    ]
                }
            ],
            equipment: [
				weapons.atGun57mmM1CarriageM2,
			],
            vehicles: [
				{
					type: vehicles.halfTrackM3A2,
					armament: [
						uses50calMG ? weapons.mg50calM2HB : weapons.mg30calM1917A1,
					],
					equipment: [
						weapons.grenadeLauncherM8,
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
