import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputNameHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setName(e.currentTarget.value.trim())
    }
    const inputEmailHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setEmail(e.currentTarget.value.trim())
    }
    const inputPasswordHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setPassword(e.currentTarget.value.trim())
    }

    const validatePassword = (password: string) => {
        return password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password);
    }

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const buttonDisabledHandler = !(name && validateEmail(email) && validatePassword(password))

    return (
    <div className="App">
      <h2>Заполните форму</h2>
        <div className={'inputsWrapper'}>
            <div>
                <input type={"text"} placeholder={'имя'} onChange={inputNameHandler} value={name}/>
                {name.trim() !== '' ? <span>Спасибо!</span> : <span>Введите корректное имя</span>}
            </div>
            <div>
                <input type={"email"} placeholder={'email'} onChange={inputEmailHandler} value={email}/>
                {validateEmail(email) ? <span>Спасибо!</span> : <span>Введите корректный email</span>}
            </div>
            <div>
                <input type={"password"} placeholder={'пароль'} onChange={inputPasswordHandler} value={password}/>
                {validatePassword(password) ? <span>Спасибо!</span> : <span>Введите корректный пароль</span>}
            </div>
            <button disabled={buttonDisabledHandler}>send</button>
        </div>
    </div>
  );
}

export default App;
