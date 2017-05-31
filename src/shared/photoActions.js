
const photos = [
    {
        id: 1490962087,
        name: "The Sea Shall Not Have Them",
        description: `During autumn of 1944, an RAF Hudson carrying a VIP passenger in possession of 
                    highly secret information is shot down and ditches in the North Sea. Fighting the 
                    elements and trying to keep up morale, the occupants of the aircraft's dinghy talk 
                    about their lives awaiting the rescue they hope will come. The film's title reflects 
                    the motto of the RAF's Air Sea Rescue Service, one of whose high speed launches battles 
                    against its own mechanical problems, enemy action, time and the weather to locate and 
                    rescue the downed crew and the vital secret papers they carry.`,
        photo: `https://yts.ag/assets/images/movies/the_sea_shall_not_have_them_1954/medium-cover.jpg`,
        featured: true ,
        date_created: 1490962087    
    },
    {
        id: 1490846887,
        name: "How to Murder Your Wife",
        description: `Stanley Ford leads an idyllic bachelor life. He is a nationally syndicated cartoonist 
                    whose Bash Brannigan series provides him with a luxury townhouse and a full-time valet, Charles. 
                    When he wakes up the morning after the night before - he had attended a friend's stag party - he 
                    finds that he is married to the very beautiful woman who popped out of the cake - and who doesn't 
                    speak a word of English. Despite his initial protestations, he comes to like married life and even 
                    changes his cartoon character from a super spy to a somewhat harried husband. When after several 
                    months he decides to kill off Bash's wife in the cartoon, his wife misinterprets his intentions 
                    and disappears. Which leads the police to charge him with murder`,
        photo: `https://yts.ag/assets/images/movies/how_to_murder_your_wife_1965/medium-cover.jpg`,
        featured: false,
        date_created: 1490846887    
    },
    {
        id:1495878654,
        name: "Alvarez Kelly",
        description: `Suave former Texan cattleman Alvarez Kelly now living in Mexico has little interest in the Civil 
                    War except to make some money. But after a long drive to deliver cattle to the Union he finds himself kidnapped 
                    by Confederate Colonel Tom Rossiter. With the hungry troops and civilians surrounded in Richmond by the Union
                    army the Colonel intends, one way or the other, to persuade Kelly to help steal the herd and move it into town.
                    Confederate money has no appeal so the Colonel resorts to other means with unexpected results.`,
        photo: `https://yts.ag/assets/images/movies/alvarez_kelly_1966/medium-cover.jpg`,
        featured: true ,
        date_created: 1495878654     
    },
    {
        id:1495965054,
        name: "The Vagrant",
        description: `The Vagrant tells the story of Graham Krackowski (the always magnificent Paxton), 
                    who moves into his new home only to be terrorized by an unruly vagrant that lives across the street 
                    in an abandon lot. What begins as simply an inconvenience to him, escalates into an all out war of 
                    head games, wit, and eventually murder.`,
        photo: `https://yts.ag/assets/images/movies/the_vagrant_1992/medium-cover.jpg`,
        featured: false,
        date_created: 1495965054
    },   
    {
        id:1490760487,
        name: "Queen Rock Montreal & Live Aid",
        description: `The movie contains two concerts of the British rock band Queen. The first concert is 
                        their show at Montreal in November 1981. The second concert is their live 
                        performance at Live Aid in 1985.`,
        photo: `https://yts.ag/assets/images/movies/queen_rock_montreal_live_aid_2007/medium-cover.jpg`,
        featured: true,
        date_created: 1490760487       
    }
];


export function getFeaturedPhotos(){
    return dispatch => {
		const features = photos.filter((photo)=> photo.featured === true);
      
        dispatch({
            type: 'SET_FEATURED_PHOTOS',
            data: features

        })			
		

	}

}

export function getAllPhotos(){
    return dispatch => {
      
        let sorted = photos.sort(function(a,b){
  
                return new Date(b.date_created) - new Date(a.date_created);

        });

        dispatch({
            type: 'SET_ALL_PHOTOS',
            data: sorted

        });
       
    }
}

export function createPhoto(params){
    let dateNow =  Date.now();
    let data = {...params, id: dateNow, date_created: dateNow};
    photos.push(data);
    console.log(photos)
    return dispatch => {
        
        dispatch({
            type: 'SET_ALL_PHOTOS',
            data: photos

        })
        
        
    }
}
export function deletePhoto(id){
    return dispatch => {
        //let deleted = photos.filter((photo, i)=>{
         //  return photo.id !== id;
        //})
        photos.forEach((photo, i)=>{
            if(photo.id === id){
                 photos.splice(i, 1);
            }
           
        })
        
        dispatch({
            type: 'SET_ALL_PHOTOS',
            data: photos

        })
        
      
    }
}

export function getPhoto(id){
    return dispatch => {
        let photo = photos.filter((photo)=> photo.id === id);
        dispatch({
            type:'SET_PHOTO',
            data: photo
        })
    
    }
}