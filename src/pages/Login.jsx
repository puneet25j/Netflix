import { useState } from 'react';

import logo from '../assets/logo.png';
import Spinner from '../components/UI/Spinner';
import { login, signup} from '../utilities/firebase'

const Login = () => {
  const [signState, setSignState] = useState('Sign In')
  const [name, setName] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const user_auth = async(event)=>{
    event.preventDefault()
    setLoading(true)
    if(signState==="Sign In"){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
    setLoading(false)
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="h-screen bg-login-bg py-3 px-[5%] sm:py-5 sm:px-[8%] ">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] m-auto rounded p-5 mt-7 sm:p-16 sm:mt-5">
        <h1 className="text-3xl font-medium mb-8">{signState}</h1>
        <form>
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="login-form-input"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="login-form-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="login-form-input"
          />
          <button
            onClick={user_auth}
            type="submit"
            className="bg-[#e50914] w-full border-0 outline-0 p-4 rounded text-base text-white font-medium mt-5 cursor-pointer"
          >
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-xs">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="w-4 h-4 my-3" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="mt-10 text-[#737373]">
          {signState === 'Sign In' && (
            <p>
              New to Netflix?{' '}
              <span
                className="ml-2 text-white font-medium cursor-pointer"
                onClick={() => {
                  setSignState('Sign Up');
                }}
              >
                Sign Up Now
              </span>
            </p>
          )}
          {signState === 'Sign Up' && (
            <p>
              Already have account?{' '}
              <span
                className="ml-2 text-white font-medium cursor-pointer"
                onClick={() => {
                  setSignState('Sign In');
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
