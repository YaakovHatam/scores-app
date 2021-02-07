import {
    ADD_GAME, UPDATE_SCORE
} from './../action-types';

const initial_state = {
    games: [
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
        {HomeTeam: 'a', AwayTeam: 'b', Score: '3-2', Date: '01-01-2021', Time: '16:45'},
    ]
}

export default function gameReducer(state = initial_state, action) {
    switch (action.type) {
        case ADD_GAME: {
            return {
                games: [...state.games, action.payload]
            }
        }
        case UPDATE_SCORE: 
        default:
            return state;
    }
}