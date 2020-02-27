import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';

export default class LMGSquad {
	constructor() {
		return new Unit(null, 'LMG', UnitClass.Squad, {
			personnel: [
				{
					role: [ 'squad_leader' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ 'assistant_squad_leader' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.sergeant ],
				},
				{
					role: [ 'rifleman' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'rifleman' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'rifleman' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'rifleman' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'rifleman' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'machine_gunner' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'ammunition_handler' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'machine_gunner' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'ammunition_handler' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'half_track_driver' ],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
			],
			equipment: [
				equipment.rocketLauncherM9,
				equipment.mg30calM1919A4,
				equipment.mg30calM1919A4,
			],
			vehicles: [
				{
					type: vehicles.halfTrackM3A2,
					armament: [ equipment.mg50calM2HB ],
					equipment: [],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
