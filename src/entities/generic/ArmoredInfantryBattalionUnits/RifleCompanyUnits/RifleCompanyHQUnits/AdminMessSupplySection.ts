import { equipment, ranks, vehicles, roles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';
import multiply from '../../../../../utils/multiply';

export default class AdminMessSupplySection {
	constructor() {
		return new Unit(null, 'Administrative, Mess & Supply', UnitClass.Section, {
			personnel: [
				{
					role: [ roles.firstSergeant ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.firstSergeant ],
				},
				{
					role: [ roles.staffSergeantMess ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ roles.staffSergeantSupply ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ roles.clerkCompany ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.corporal ],
				},
				{
					role: [ roles.cook ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [ roles.cook ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [ roles.cook ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.cook ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.cook ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.cooksHelper ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.driverTruckLight ],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.driverTruckLight ],
					equipment: [ equipment.smg45calM3 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.messenger ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
			].concat(multiply(22, {
				role: [ roles.basic ],
				equipment: [ equipment.rifle30calM1 ],
				rank: [
					ranks.privateFirstClass,
					ranks.privateBasic,
				],
			},)),
			equipment: [
				equipment.grenadeLauncherM8,
				equipment.grenadeLauncherM8,
				equipment.rocketLauncherM9,
			],
			vehicles: [
				{
					type: vehicles.truck21_2ton6x6,
					armament: [],
					equipment: [ equipment.trailer1ton2WheelCargo ],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
