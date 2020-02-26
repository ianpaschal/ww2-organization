import Unit, {UnitClass} from '../../../../../Unit';
import { equipment, vehicles, weapons, ranks } from '../../../../../terminology';

export default class MaintenanceSection {
    constructor() {
        return new Unit(null, 'Maintenance', UnitClass.Section, {
			personnel: [
				{
					role: ['executive_motor_officier'],
					equipment: [
						weapons.carbine30calM1,
					],
					rank: [
						ranks.firstLieutenant,
						ranks.secondLieutenant,
					]
				},
				{
					role: ['motor_officier'],
					equipment: [
						weapons.carbine30calM1,
					],
					rank: [
						ranks.staffSergeant,
					]
				},
				{
					role: ['armorer'],
					equipment: [
						weapons.carbine30calM1,
					],
					rank: [
						ranks.technicianGrade5
					]
				},
				{
					role: ['armorer'],
					equipment: [
						weapons.carbine30calM1,
					],
					rank: [
						ranks.technicianGrade5
					]
				},
				{
                    role: ['automobile_mechanic'],
                    equipment: [
                        weapons.carbine30calM1,
                    ],
                    rank: [
                        ranks.technicianGrade4,
                    ]
				},
				{
                    role: ['automobile_mechanic', 'half_track_driver'],
                    equipment: [
                        weapons.smg45calM3,
                    ],
                    rank: [
                        ranks.technicianGrade4,
                    ]
				},
				{
                    role: ['automobile_mechanic', 'jeep_driver'],
                    equipment: [
                        weapons.smg45calM3,
                    ],
                    rank: [
                        ranks.technicianGrade5,
                    ]
				},
			],
			equipment: [
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
					equipment: []
				}
			],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
