import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import store from '../observavles/store';

@observer
class SelfObserve extends React.Component {
	// eslint-disable-next-line prettier/prettier
  @observable selected = 'A';

	render() {
		return (
			<div>
				<div>Select : {this.selected}</div>
				<button
					type="button"
					onClick={() => {
						this.selected = 'A';
						return null;
					}}
				>
					A
				</button>
				<button
					type="button"
					onClick={() => {
						this.selected = 'B';
						return null;
					}}
				>
					B
				</button>
			</div>
		);
	}
}
export default SelfObserve;
