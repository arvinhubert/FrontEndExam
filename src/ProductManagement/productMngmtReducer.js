const initiateState = {
	photos:[],
	photo:{}
}


export default (state=initiateState, action) => {
	switch(action.type){
        case 'SET_ALL_PHOTOS':
            return state = {...state, photos: action.data};
					
		case 'SET_PHOTO':
			 return state = {...state, photo: action.data[0]};
         case 'DELETE_PHOTO':
            return state = {...state, photos: action.data} ;   

		default:
			return state;
	}
	
}