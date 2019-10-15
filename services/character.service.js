import { CONST } from '../helpers';
import axios from './interceptor';

export const CharacterService = {

    getCharacters(filters) {
        let url = `${CONST.API_URL}/characters`;
		url += this.encodeQueryData(filters);
		return axios.get(url);
    }
    
}