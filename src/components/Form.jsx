import React, { useState } from 'react';
import image from '../assets/image.png'
import '../Styles/form.css'

const Form = () => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errorUserName, setErrorUserName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')


  const [userColor, setUserColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('')


  const validate = e => {
    e.preventDefault()
    if (userName.length > 8) {
      setErrorUserName('')
      setUserColor('green')
    } else {
      setErrorUserName('Username must be 8 letter long')
      setUserColor('red')
    }

    if (userEmail.includes('@gmail')) {
      setErrorEmail('')
      setEmailColor('green')
    } else {
      setErrorEmail('Email should have @gmail')
      setEmailColor('red')
    }

    if (password.length > 8 && /[!@#$%^&*]/.test(password)) {
      setErrorPassword('')
      setPasswordColor('green')
    } else {
      setErrorPassword('Password should have atleast 8 character & must contain one special character')
      setPasswordColor('red')
    }

    if (password != '' && confirmPassword == password) {
      setErrorConfirmPassword('')
      setConfirmPasswordColor('green')

    } else {
      setErrorConfirmPassword('Confirm Password didnt match')
      setConfirmPasswordColor('red')
    }
  }

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            style={{ borderBottom: `2px solid ${userColor}` }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <p className="error">{errorUserName}</p>

          <input
            type="email"
            placeholder="Email"
            style={{ borderBottom: `2px solid ${emailColor}` }}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <p className="error">{errorEmail}</p>

          <input
            type="password"
            placeholder="Password"
            style={{ borderBottom: `2px solid ${passwordColor}` }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{ borderBottom: `2px solid ${confirmPasswordColor}` }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
