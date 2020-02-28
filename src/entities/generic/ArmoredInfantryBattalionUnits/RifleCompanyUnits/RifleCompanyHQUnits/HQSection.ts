import Unit, { UnitClass } from '../../../../../Unit';
import { equipment, vehicles, ranks, roles } from '../../../../../terminology';

export default class HQSection {
	constructor() {
		return new Unit(null, 'HQ', UnitClass.Section, {
			personnel: [
				{
					role: [ roles.companyCommander ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.captain ],
				},
				{
					role: [ roles.communicationChief ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.sergeant ],
				},
				{
					role: [ roles.bugler ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.driverHalfTrack ],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.gunnerMachine ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [
						roles.messenger,
						roles.driverTruckLight,
					],
					equipment: [ equipment.smg45calM3 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.rifleman ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.rifleman ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.rifleman ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
			],
			equipment: [
				equipment.radioSetSCR536,
				equipment.radioSetSCR536,
				equipment.rocketLauncherM9,
				equipment.grenadeLauncherM8,
			],
			vehicles: [
				{
					type: vehicles.truck1_4ton4x4,
					equipment: [ equipment.radioSetSCR510 ],
				},
				{
					type: vehicles.halfTrackM3A2,
					armament: [ equipment.mg50calM2HB ],
					equipment: [ equipment.radioSetSCR528 ],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
