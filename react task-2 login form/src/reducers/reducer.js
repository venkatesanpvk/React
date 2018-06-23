export default(state={}, action={})=>{
		console.log(action)
	switch(action.type){
		case "FETCH_FORMDATA":
			return action.setvalues;
		default: 
			return state;
	}
}