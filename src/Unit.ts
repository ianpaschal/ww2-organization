import capitalize from './utils/capitalize';
import makeOrdinalSuffix from './utils/makeOrdinalSuffix';

export interface UnitContains {
    subUnits?: any[];
    personnel?: any[];
    equipment?: any[];
    vehicles?: any[];
}

export enum UnitClass {
    Division = 'Division',
    Regiment = 'Regiment',
    Battalion = 'Battalion',
    Battery = 'Battery',
    Company = 'Company',
    Platoon = 'Platoon',
    Section = 'Section',
    Squad = 'Squad',
}

export default class Unit {
    id: number|string|null;
    unitType: string;
    unitClass: UnitClass;
    contains: any;
    source: {
        date: Date;
        name: string;
    }
    independent: boolean;

    constructor(id, unitType, unitClass: UnitClass, contains: UnitContains, source, independent = false) {
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
            if (this.unitClass === UnitClass.Division || this.unitClass === UnitClass.Regiment || this.independent) {
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

    // findSubUnit(identifier: number|string) {
    //     return this.contains.find((unit) => {
    //         return unit.id === identifier;
    //     })
    // }
}