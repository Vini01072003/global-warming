'use strict'
export const admDelete = async (email) => {
    const url = `http://localhost:8080/v1/dream-chock/api/delete-account/employee?email=${email}`;
  
    const response = await fetch(url, {
      method: 'DELETE'
    });
    
    const data = await response.json();
  
    return {...data};
  };