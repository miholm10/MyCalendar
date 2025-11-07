import { useState, useEffect } from 'react'; //you’re looking at a React custom hook called useAuthState, written in TypeScript, that checks whether a user is signed in using AWS Amplify’s authentication service.
import { getCurrentUser } from 'aws-amplify/auth'; //AWS Amplify function to verify current user

export const useAuthState = (): boolean => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false); //It returns a boolean (true if signed in, false otherwise).

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        await getCurrentUser();
        setIsSignedIn(true);
      } catch (error) {
        setIsSignedIn(false);
      }
    };

    checkAuthState();




  }, []);

  return isSignedIn;
  };
