import React from 'react';
import './App.scss';
import Slider from 'react-input-slider';
import SampleDivision from '../entities/SampleDivision';
import GraphicRenderer from './GraphicRenderer';
import { LMGSquad } from '../entities/generic/ArmoredInfantryBattalionUnits/RifleCompanyUnits/RiflePlatoonUnits';

class App extends React.Component {

	state: {
		x: number;
	}

	constructor(props) {
		super(props);
		this.state = {
			x: 10,
		};
	}
	render() {
		return (
			<div className="App">
				Hello world!
				{SampleDivision.children.map((unit, i) => {
					return <div key={i}>
						{unit.nameLabel}{unit.children.map((sub, j) => {
							return <div key={j}>{sub.nameLabel}</div>
						})}
					</div>
				})}
				<GraphicRenderer unit={new LMGSquad()} />
				<div>
					<Slider
						axis="x"
						x={this.state.x}
						onChange={({ x }) => this.setState({ x })}
					/>
				</div>
			</div>
		);
	}
}

export default App;
