import { equipment, ranks, vehicles, roles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';

export default class AntiTankPlatoonHQ {
	constructor() {
		return new Unit(null, 'Anti-Tank', UnitClass.PlatoonHQ, {
			personnel: [
				{
					role: [ roles.platoonCommander ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.firstLieutenant,
						ranks.secondLieutenant,
					],
				},
				{
					role: [ roles.technicalSergeantPlatoon ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicalSergeant ],
				},
				{
					role: [ roles.messenger ],
					equipment: [ equipment.smg45calM3 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
			],
			equipment: [],
			vehicles: [
				{
					type: vehicles.truck1_4ton4x4,
					armament: [],
					equipment: [
						equipment.grenadeLauncherM8,
						equipment.radioSetSCR510,
					],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
