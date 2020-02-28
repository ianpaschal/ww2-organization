import Unit, { UnitClass } from '../../../../../Unit';
import { equipment, vehicles, ranks, roles } from '../../../../../terminology';

export default class MaintenanceSection {
	constructor() {
		return new Unit(null, 'Maintenance', UnitClass.Section, {
			personnel: [
				{
					role: [ roles.lieutenantMotorTransport ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [
						ranks.firstLieutenant,
						ranks.secondLieutenant,
					],
				},
				{
					role: [ roles.staffSergeantMotor ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.staffSergeant ],
				},
				{
					role: [
						roles.armorer,
						roles.driverTruckLight,
					],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.mechanicAutomobile ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [
						roles.mechanicAutomobile,
						roles.driverTruckHeavy,
					],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
			],
			equipment: [],
			vehicles: [
				{
					type: vehicles.truck1_4ton4x4,
				},
				{
					type: vehicles.truck21_2ton6x6Maintenance,
					armament: [ equipment.mg50calM2HB ],
					equipment: [ equipment.trailer1ton2WheelCargo ],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-29',
		});
	}
}
