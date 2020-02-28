import { equipment, ranks, vehicles, roles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';

export default class HQSquad {
	constructor() {
		return new Unit(null, 'HQ', UnitClass.Squad, {
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
					equipment: [ equipment.rifle30calM1 ],
					rank: [ ranks.technicalSergeant ],
				},
				{
					role: [ roles.squadLeader ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ roles.riflemanSniper ],
					equipment: [ equipment.rifle30calM1903A4 ],
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
				{
					role: [ roles.rifleman ],
					equipment: [ equipment.rifle30calM1 ],
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
			],
			equipment: [
				equipment.grenadeLauncherM7,
				equipment.grenadeLauncherM7,
				equipment.rocketLauncherM9,
			],
			vehicles: [
				{
					type: vehicles.halfTrackM3A2,
					armament: [ equipment.mg50calM2HB ],
					equipment: [ equipment.radioSetSCR510 ],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
