import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';

export default class AntiTankSquad {
	constructor(uses50calMG: boolean = false) {
		return new Unit(null, 'Anti-Tank', UnitClass.Squad, {
			personnel: [
				{
					role: [ 'squad_leader' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ 'anti_tank_gunner' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.corporal ],
				},
				{
					role: [ 'cannoneer' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'cannoneer' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'cannoneer' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'cannoneer' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'ammunition_handler' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'ammunition_handler' ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'ammunition_handler' ],
					equipment: [ equipment.rifle30calM1 ],
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
			equipment: [ equipment.atGun57mmM1CarriageM2 ],
			vehicles: [
				{
					type: vehicles.halfTrackM3A2,
					armament: [ uses50calMG ? equipment.mg50calM2HB : equipment.mg30calM1917A1 ],
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
