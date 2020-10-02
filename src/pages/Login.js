import React from 'react'
import { useHistory } from 'react-router-dom'

function Login () {
  const history = useHistory()
  return (
    <div className='login'>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          name='name'
          id='name'
          class='form-control'
          placeholder='Username'
          required
        />
        <input
          type='password'
          name='password'
          id='password'
          class='form-control'
          placeholder='Password'
          required
        />
        <div className='signin'>
          <label>
            <input
              name='remember'
              value='remember'
              type='checkbox'
              class='input-checkbox'
            />
            Remember Me
          </label>
          <button
            className='btn btn-signin'
            onClick={() => history.push('/home')}
          >
            Sign In
          </button>
        </div>
        <div className='sosmed-login'>
          <button
            className='btn-facebook'
            onClick={() => history.push('/home')}
          >
            Sign In with Facebook
          </button>
          <button className='btn-google' onClick={() => history.push('/home')}>
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
