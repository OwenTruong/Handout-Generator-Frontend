import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// Allow people to skip login/singup and go to next panel. Panel comes in from the right to create a new stack. Panel fizzles out to the left to remove it from stack (only fizzle for login/signup and help panel for now). Fizzling should only be used for panels that are temporary and are not part of the main chain of panels.

export function Login(props: Props): JSX.Element {
  return <div>Login</div>;
}
