import Unit, {UnitClass} from '../Unit';
import HQSquad from './ArmoredRiflePlatoonUnits/HQSquad';
import RifleSquad from './ArmoredRiflePlatoonUnits/RifleSquad';
import MortarSquad from './ArmoredRiflePlatoonUnits/MortarSquad';
import LMGSquad from './ArmoredRiflePlatoonUnits/LMGSquad';

export default class ArmoredRiflePlatoon {
    constructor(id: number) {
        return new Unit(id, 'Armored Rifle', UnitClass.Platoon, {
            subUnits: [
                new HQSquad(),
                new RifleSquad(),
                new RifleSquad(),
                new MortarSquad(),
                new LMGSquad(),
            ],
        }, {
            date: new Date(1943, 9, 15),
            name: 'T/O&E 7-27',
        });
    }
}