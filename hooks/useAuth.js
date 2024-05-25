import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:3001/auth/check-auth", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const result = await response.json();
          console.log("Response is:", JSON.stringify(result.user, null, 2));
          setIsAuthenticated(true);
          setUser(result.user);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated, user, loading };
};

export default useAuth;
