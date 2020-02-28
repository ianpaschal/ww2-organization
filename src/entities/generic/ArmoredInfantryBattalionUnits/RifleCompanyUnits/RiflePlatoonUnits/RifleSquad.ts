import { equipment, ranks, vehicles, roles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';

export default class RifleSquad {
	constructor() {
		return new Unit(null, 'Rifle', UnitClass.Squad, {
			personnel: [
				{
					role: [ roles.squadLeader ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ roles.squadLeaderAssistant ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [ ranks.sergeant ],
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
				equipment.rocketLauncherM9,
				equipment.grenadeLauncherM7,
				equipment.grenadeLauncherM7,
			],
			vehicles: [
				{
					type: vehicles.halfTrackM3A2,
					armament: [ equipment.mg30calM1917A1 ],
					equipment: [],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
