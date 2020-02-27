import React from 'react';
import Unit from '../Unit';
import { Popup } from 'semantic-ui-react';
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
					{unit.personnel.length > 0 &&
						unit.personnel.map((person, i) => (
							<Popup
								content={person.rank[ 0 ].official}
								key={i}
								header={person.role[ 0 ]}
								trigger={<div className='PersonGraphic'></div>}
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
