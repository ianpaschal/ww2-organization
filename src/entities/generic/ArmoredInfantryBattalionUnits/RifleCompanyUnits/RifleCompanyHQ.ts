import Unit, {UnitClass} from '../../../../Unit';
import {
	HQSection,
	MaintenanceSection,
	AdminMessSupplySection
} from './RifleCompanyHQUnits';

export default class RifleCompanyHQ {
    constructor() {
        return new Unit(null, 'Rifle', UnitClass.CompanyHQ, {
            subUnits: [
				new HQSection(),
				new MaintenanceSection(),
                new AdminMessSupplySection(),
            ],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}
