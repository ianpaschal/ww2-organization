import React from 'react';
import Unit from '../Unit';

interface GraphicRendererProps {
	unit: any;
}

export default class GraphicRenderer extends React.Component<GraphicRendererProps> {
	render() {
		console.log(this.props.unit.contains.personnel);
		return (
			// <div>{JSON.stringify(this.props.unit.contains.personnel)}</div>
			<div>
				{this.props.unit.contains.personnel.map((person, i) => {
					return (
						<div key={i}>
							<p><strong>Role:</strong> {JSON.stringify(person.role)}</p>
							<p><strong>Equipment:</strong> {JSON.stringify(person.equipment)}</p>
							<p><strong>Rank:</strong> {JSON.stringify(person.rank)}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
