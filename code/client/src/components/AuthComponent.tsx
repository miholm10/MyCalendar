import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; //adds the default Amplify Auth UI styles

interface AuthComponentProps extends WithAuthenticatorProps {
  children: React.ReactNode;
}

const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
  return <>{children}</>;
};

export default withAuthenticator(AuthComponent, {
  hideSignUp: true,
});//withAuthenticator(...) wraps your component in Amplify’s authentication logic. It ensures users must log in before they see your app.
//{ hideSignUp: true } → hides the “Sign Up” option (so only existing users can log in). If a user isn’t logged in → Amplify shows a sign-in screen.
//Once they log in → Amplify displays the children (your app).