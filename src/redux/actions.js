import {
    ADD_GAME, UPDATE_SCORE
} from './action-types';


export const ADD_GAME_ACTION = (gameItem) => ({
    type: ADD_GAME,
    payload: gameItem
});