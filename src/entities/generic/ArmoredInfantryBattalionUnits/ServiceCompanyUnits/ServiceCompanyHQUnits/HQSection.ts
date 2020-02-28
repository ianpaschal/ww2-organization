import Unit, { UnitClass } from '../../../../../Unit';
import { equipment, vehicles, ranks, roles } from '../../../../../terminology';

export default class HQSection {
	constructor() {
		return new Unit(null, 'HQ', UnitClass.Section, {
			personnel: [
				{
					role: [
						roles.companyCommander,
						roles.s4Assistant,
					],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.captain ],
				},
				{
					role: [ roles.communicationChief ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.sergeant ],
				},
				{
					role: [
						roles.bugler,
						roles.driverTruckLight,
					],
					equipment: [ equipment.smg45calM3 ],
					rank: [
						ranks.privateFirstClass,
						ranks.privateBasic,
					],
				},
				{
					role: [ roles.operatorRadio ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade4 ],
				},
				{
					role: [ roles.operatorRadio ],
					equipment: [ equipment.carbine30calM1 ],
					rank: [ ranks.technicianGrade5 ],
				},
			],
			equipment: [],
			vehicles: [
				{
					type: vehicles.truck3_4ton4x4weapons,
					equipment: [
						equipment.radioSetSRC506,
						equipment.radioSetSCR510,
					],
				},
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-29',
		});
	}
}
