import capitalize from './utils/capitalize';
import makeOrdinalSuffix from './utils/makeOrdinalSuffix';
import { Term } from './types';

export interface Personnel {
	role: string[];
	equipment: Term[];
	rank: Term[];
}

export interface Vehicle {
	type: Term;
	armament?: Term[];
	equipment?: Term[];
}

export interface UnitContains {
    subUnits?: any[];
    personnel?: Personnel[];
    equipment?: Term[];
    vehicles?: Vehicle[];
}

export enum UnitClass {
    Division = 'Division',
    Regiment = 'Regiment',
	Battalion = 'Battalion',
	BattalionHQ = 'Battalion HQ', // Same level as 'Company' or 'Battery'
    Battery = 'Battery', // Same level as 'Company'
	Company = 'Company', // Same level as 'Battery'
	CompanyHQ = 'Company HQ', // Same level as 'Platoon'
	Platoon = 'Platoon',
	PlatoonHQ = 'Platoon HQ', // Same level as 'Squad' or 'Section'
    Section = 'Section', // Same level as 'Squad'
    Squad = 'Squad', // Same level as 'Section'
}

export default class Unit {
    id: number|string|null;
    unitType: string;
    unitClass: UnitClass;
    contains: UnitContains;
    source: {
        date: Date;
        name: string;
    }
    independent: boolean;

    constructor(
    	id: number|string|null,
    	unitType: string,
    	unitClass: UnitClass,
    	contains: UnitContains,
    	source,
    	independent = false
    ) {
    	this.id = id;
    	this.unitType = unitType;
    	this.unitClass = unitClass;
    	this.contains = contains;
    	this.source = source;
    	this.independent = independent;
    }

    get nameLabel(): string {
    	if (!this.id) {
    		return this.typeLabel;
    	}
    	if (typeof this.id === 'number') {
    		if (this.unitClass === UnitClass.Division ||
				this.unitClass === UnitClass.Regiment ||
				this.independent
    		) {
    			return `${makeOrdinalSuffix(this.id)} ${this.unitType} ${this.unitClass}`;
    		}
    		return `${makeOrdinalSuffix(this.id)} ${this.unitClass}`;
    	}
    	return `${this.id} ${this.unitClass}`;
    }

    get typeLabel(): string {
    	return `${this.unitType} ${capitalize(this.unitClass)}`;
    }

    get flattened() {
    	return this.contains.flattened;
    }

    get json(): string {
    	return JSON.stringify(this.flattened);
    }

    get children(): Unit[] {
    	return this.contains.subUnits;
    }

	// findSubUnit(identifier: number|string) {
	//     return this.contains.find((unit) => {
	//         return unit.id === identifier;
	//     })
	// }
}
