import React from 'react';
import { observer } from 'mobx-react';
import store from '../observavles/store';

function SelfObserve(props: any) {
	return (
		<div>
			<div>Select : A</div>
			<button type="button">A</button>
			<button type="button">B</button>
		</div>
	);
}
export default observer(SelfObserve);
