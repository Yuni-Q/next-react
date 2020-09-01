import React from 'react';
import { observer } from 'mobx-react';
import store from '../observavles/store';

function Display(props: any) {
	return <div>Count : {store.count}</div>;
}
export default observer(Display);
