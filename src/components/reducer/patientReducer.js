export const patientState = {
    patients:[]
}

export const patientReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_PATIEN':
            return state;
        case 'REMOVE_PATIEN':
            return state;
        default:
            return state;
    }
}