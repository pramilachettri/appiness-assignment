import { GET_EMPLOYEES } from '../actions/Types'

const initialState = {
    employees: []
}

export default (state= initialState, action ) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload
            }
        default:
            return state;
    }
}