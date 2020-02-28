import Unit, { UnitClass } from '../../../../../Unit';
import { equipment, vehicles, ranks, roles } from '../../../../../terminology';
import multiply from '../../../../../utils/multiply';

export default class AdminMessSupplySection {
	constructor() {
		return new Unit(null, 'Administration, Mess & Supply', UnitClass.Section, {
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
					rank: [
						ranks.technicianGrade5,
						ranks.privateFirstClass,
						ranks.privateFirstClass,
					],
				},
			].concat(multiply(4, {
				role: [ roles.basic ],
				equipment:[],
				rank:[
					ranks.privateFirstClass,
					ranks.privateBasic,
				],
			})),
			equipment: [],
			vehicles: [
				{
					type: vehicles.truck21_2ton6x6Kitchen, // TODO: Should be specified as kitchen version
					armament: [ equipment.mg30calM1919A4 ],
					equipment: [ equipment.trailer1ton2WheelCargo ],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-29',
		});
	}
}
