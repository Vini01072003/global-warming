'use strict'

export const getDoacao = async () => {
    const url = 'http://localhost:8080/v1/dream-chock/api/all-data-donation/rh';

    const response = await fetch(url);
    const data = await response.json();
  
    return data.message;
};





