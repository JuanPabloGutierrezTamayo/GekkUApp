import React, { useState, useEffect, createContext } from 'react';

// export const UserContext = createContext([[], () => {}]);
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem('sessionToken'));

  useEffect(() => {
    fetchUser();
  }, [token]);

  const fetchUser = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const response = await fetch("/api/students/me", requestOptions);
    
    if(!response.ok) {
      setToken(null);
    } else {
      localStorage.setItem('sessionToken', token);
    }
  };

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};