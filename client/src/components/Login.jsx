import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Login() {
  const error = useRouteError();
  console.error(error);

  React.useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="login-box">
      <div id="g_id_onload" data-client_id="16755906116-j36mdsgp9qc5s6m7ir67a70fm36nsqho.apps.googleusercontent.com"
        data-context="signin" data-ux_mode="popup" data-login_uri="http://localhost:8080/google-oauth/"
        data-itp_support="true">
      </div>
      <div className="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with"
        data-size="large" data-logo_alignment="left">
      </div>
      {/*<input type='text' />
      <input type='password' />
  <button type='submit'>Log in</button>*/}
    </div>
  );
}