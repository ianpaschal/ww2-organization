import { equipment, ranks, vehicles } from '../../../../../terminology';
import Unit, { UnitClass } from '../../../../../Unit';
import multiply from '../../../../../utils/multiply';

export default class AdminMessSupplySection {
	constructor() {
		return new Unit(null, 'Administrative, Mess & Supply', UnitClass.Section, {
			personnel: [
				{
					role: [ 'first_sergeant' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.firstSergeant ],
				},
				{
					role: [ 'mess_officer' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ 'supply_officer' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [ 'company_clerk' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.corporal ],
				},
				{
					role: [ 'cook' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [ 'cook' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [ 'cook' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ 'cook' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ 'cook' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ 'cooks_helper' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'jeep_driver' ],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ 'jeep_driver' ],
					equipment: [ equipment.smg45calM3 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ 'messenger' ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
			].concat(multiply(22, {
				role: [ 'basic' ],
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
