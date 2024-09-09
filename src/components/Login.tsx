import React, { useState } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useUser()
  const navigate = useNavigate() // використаємо навігацію для переходу на сторінку "User"

  const handleLogin = () => {
    // Простий приклад перевірки
    if (username && password) {
      setUser(username) // Оновлюємо контекст із даними користувача
      navigate('/user') // Переходимо на сторінку користувача
    } else {
      alert('Неправильний логін або пароль')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
