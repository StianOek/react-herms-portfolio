import { TOGGLED } from './types';

export const toggleMenu = (menuOpen) => {
    return {
        type: TOGGLED,
        payload: !menuOpen,
        
    }
}