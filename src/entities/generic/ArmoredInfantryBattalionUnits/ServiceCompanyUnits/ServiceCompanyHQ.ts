import Unit, { UnitClass } from '../../../../Unit';
import {
	HQSection,
	MaintenanceSection,
	AdminMessSupplySection,
} from './ServiceCompanyHQUnits';

export default class ServiceCompanyHQ {
	constructor() {
		return new Unit(null, 'Service', UnitClass.CompanyHQ, {
			subUnits: [
				new HQSection(),
				new MaintenanceSection(),
				new AdminMessSupplySection(),
			],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-29',
		});
	}
}
