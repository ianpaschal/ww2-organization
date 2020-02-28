import { equipment, ranks, vehicles, roles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';

export default class AntiTankSquad {
	constructor(uses50calMG: boolean = false) {
		return new Unit(null, 'Anti-Tank', UnitClass.Squad, {
			personnel: [
				{
					role: [ roles.squadLeader ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ roles.gunnerAntiTank ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.corporal ],
				},
				{
					role: [ roles.cannoneer ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.cannoneer ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.cannoneer ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.cannoneer ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.handlerAmmunition ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.handlerAmmunition ],
					equipment: [ equipment.rifle30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.handlerAmmunition ],
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
