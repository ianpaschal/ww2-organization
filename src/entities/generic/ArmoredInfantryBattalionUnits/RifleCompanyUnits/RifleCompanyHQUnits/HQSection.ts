import Unit, {UnitClass} from '../../../../../Unit';
import { equipment, vehicles, weapons, ranks } from '../../../../../terminology';

export default class HQSection {
    constructor() {
        return new Unit(null, 'HQ', UnitClass.Section, {
			personnel: [
				{
                    role: ['company_commander'],
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.captain,
                    ]
				},
				{
                    role: ['communication_chief'],
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.sergeant,
                    ]
				},
				{
                    role: ['bugler'],
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
                    role: ['half_track_driver'],
                    equipment: [
                        weapons.smg45calM3,
                    ],
                    rank: [
                        ranks.technicianGrade5,
                    ]
				},
				{
                    role: ['machine_gunner'],
                    equipment: [
						weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
                    role: ['messenger', 'jeep_driver'],
                    equipment: [
                        weapons.smg45calM3,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
                    role: ['rifleman'],
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
                    role: ['rifleman'],
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
				},
				{
                    role: ['rifleman'],
                    equipment: [
                        weapons.rifle30calM1,
                    ],
                    rank: [
                        ranks.privateFirstClass,
                        ranks.privateBasic,
                    ]
                },
			],
			equipment: [
				equipment.radioSetSCR536,
				equipment.radioSetSCR536,
				weapons.rocketLauncherM9,
				weapons.grenadeLauncherM8,
			],
			vehicles: [
				{
					type: vehicles.truck1_4ton4x4,
					equipment: [
						equipment.radioSetSCR510,
					]
				},
				{
					type: vehicles.halfTrackM3A2,
					armament: [
						weapons.mg50calM2HB,
					],
					equipment: [
						equipment.radioSetSCR528,
					]
				}
			],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
