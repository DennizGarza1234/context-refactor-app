import { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Create Provider Component
export function UserProvider({ children }) {
  const [user] = useState({
    name: "Denniz Garza",
    email: "denniz@example.com",
    themePreference: "dark",
  });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}