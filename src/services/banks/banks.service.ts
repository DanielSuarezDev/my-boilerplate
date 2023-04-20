import {get} from '../../utils/AxiosAdapter';

export const listBanksService = async (): Promise<[]> => {
    const uri = `https://dev.obtenmas.com/catom/api/challenge/banks`;
    const response = await get({
      url: uri,
    })
  
    return response;
  };