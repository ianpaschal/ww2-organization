import React from 'react';
import Unit from '../Unit';
import { Popup } from 'semantic-ui-react';
import { vehicles } from '../terminology';
import './UnitBox.scss';

interface UnitBoxProps {
	unit: Unit;
}

interface UnitBoxState {
	expanded: boolean;
}

const style = {
	backgroundColor: 'red',
};

export default class UnitBox extends React.Component<UnitBoxProps, UnitBoxState> {
	render() {
		const { unit } = this.props;
		return (
			<div className={'unit-box'}>
				<button className={'unit-box-header'} onClick={() => {
					console.log('clicked');
				}}>
					<h3>{unit.nameLabel} - {unit.personnelCount} Men</h3>
					<p>+</p>
				</button>
				<div className={'unit-box-body'}>
					{unit.vehicles.length > 0 &&
						unit.vehicles.map((vehicle, i) => (
							<div className={'graphic ' + function() {
								if (vehicle.type === vehicles.truck1_4ton4x4) {
									return 'JeepGraphic';
								}
								if (vehicle.type === vehicles.truck21_2ton6x6Kitchen || vehicle.type === vehicles.truck21_2ton6x6Maintenance) {
									return 'CCKWGraphic';
								}
								if (vehicle.type === vehicles.halfTrackM3A2) {
									return 'HalfTrackGraphic';
								}
								return '';
							}()}></div>
						))
					}
					{unit.personnel.length > 0 &&
						unit.personnel.map((person, i) => (
							<Popup
								content={person.rank[ 0 ].official}
								key={i}
								header={person.role[ 0 ]}
								trigger={<div className='graphic PersonGraphic'></div>}
								position='top center'
								style={style}
							/>
						))
					}
					{unit.subUnits.map((unit, i) => {
						return <UnitBox key={i} unit={unit}/>;
					})}
				</div>
			</div>
		);
	}
}
