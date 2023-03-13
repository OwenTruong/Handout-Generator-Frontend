import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
interface CompProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

// Allow people to skip login/singup and go to next panel. Panel comes in from the right to create a new stack. Panel fizzles out to the left to remove it from stack (only fizzle for login/signup and help panel for now). Fizzling should only be used for panels that are temporary and are not part of the main chain of panels.

const LoginComponent = ({ setIsLogin }: CompProps): JSX.Element => {
  return (
    <form>
      <input type="text" placeholder="Email" />
      <input type="hidden" placeholder="Password" />
      <button onClick={() => setIsLogin(true)}>Sign Up</button>
    </form>
  );
};

const SignUpComponent = ({ setIsLogin }: CompProps): JSX.Element => {
  return (
    <form>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button onClick={() => setIsLogin(false)}>Login</button>
    </form>
  );
};

export function LoginPanel(props: Props): JSX.Element {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      <h3>Login Panel</h3>
      {isLogin ? (
        <LoginComponent setIsLogin={setIsLogin} />
      ) : (
        <SignUpComponent setIsLogin={setIsLogin} />
      )}
      <button>Skip</button>
    </div>
  );
}
