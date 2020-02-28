import Unit, { UnitClass } from '../../../Unit';
import {
	ServiceCompanyHQ,
} from './ServiceCompanyUnits';

export default class ServiceCompany {
	constructor() {
		return new Unit(null, 'Service', UnitClass.Company, {
			subUnits: [ new ServiceCompanyHQ() ],
		}, {
			date: new Date(1943, 9, 15),
			name: 'T/O&E 7-29',
		});
	}
}
