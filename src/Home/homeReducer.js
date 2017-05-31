

export default (state=[], action) => {
	switch(action.type){
		case 'SET_FEATURED_PHOTOS':
	
			return state = {...state, featuredPhotos: action.data};
        case 'SET_ALL_PHOTOS':
            return state = {...state, allPhotos: action.data}
		default:
			return state;
	}
}