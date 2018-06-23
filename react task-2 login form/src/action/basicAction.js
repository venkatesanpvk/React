import 'whatwg-fetch';

import { FETCH_FORMDATA } from './types/index';

export function basicAction(setvalues){
	return{
		type:FETCH_FORMDATA,
		setvalues
	}
}

export function getValues(res){
	return dispatch => dispatch(basicAction(res));
}
