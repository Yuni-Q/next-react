import React from 'react';
import { observer } from 'mobx-react';
import store from '../observavles/store';

function Controller(props: any) {
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					store.count += 1;
					return null;
				}}
			>
				증가
			</button>
		</div>
	);
}

export default observer(Controller);
