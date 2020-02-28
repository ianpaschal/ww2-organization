import Unit, { UnitClass } from '../../../../../Unit';
import { equipment, vehicles, ranks, roles } from '../../../../../terminology';

export default class MaintenanceSection {
	constructor() {
		return new Unit(null, 'Maintenance', UnitClass.Section, {
			personnel: [
				{
					role: [ roles.lieutenantExecutiveMotor ],
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
					role: [ roles.armorer ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
				{
					role: [ roles.armorer ],
					equipment: [ equipment.carbine30calM1 ],
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
						roles.driverHalfTrack,
					],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [
						roles.mechanicAutomobile,
						roles.driverTruckLight,
					],
					equipment: [ equipment.smg45calM3 ],
					rank: [ ranks.technicianGrade5 ],
				},
			],
			equipment: [
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
					equipment: [],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-27',
		});
	}
}
