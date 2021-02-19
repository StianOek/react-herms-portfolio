import {TOGGLED} from './types';

export const toggle = (menuOpen) => {
    return {
        type: TOGGLED,
        payload: !menuOpen,
        
    }
}