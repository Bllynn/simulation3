const initialState={
    user:{}
}


const USER_DATA='USER_DATA';
const CREATE_USER='CREATE_USER';


export function createUser(user){
    return{
        type:CREATE_USER,
        payload:user
    }
}



export default function reducer(state =initialState,action){
        switch(action.type){
            case USER_DATA:
            return Object.assign({},state,{user:action.payload})
            case CREATE_USER:
            return Object.assign({},state,{user:action.payload})

            default:
            return state;

        }

}