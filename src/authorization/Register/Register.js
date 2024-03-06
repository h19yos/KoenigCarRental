import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css';

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    let valid = true;
    if (!formData.email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 4 || formData.password.length > 10) errors.password = 'Password must be 4-10 characters long';
    if (!formData.cpassword || formData.cpassword !== formData.password) errors.cpassword = 'Passwords do not match';
    setErrors(errors);
    Object.keys(errors).forEach((key) => {
      if (errors[key]) valid = false;
    });
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:4000/auth/register', formData);
        alert(response.data.message);
        navigate('/login', { replace: true });
      } catch (error) {
        console.error('Registration error', error);
      }
    }
  };

  return (
    <div className={styles.alpage}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.register}>
          <h1>Register</h1>
          <div className={styles['input-box']}>
            <input type="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </div>
          <div className={styles['input-box']}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div className={styles['input-box']}>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <div className={styles['input-box']}>
            <input type="password" name="cpassword" placeholder="Confirm Password" value={formData.cpassword} onChange={handleChange} />
            {errors.cpassword && <p className={styles.error}>{errors.cpassword}</p>}
          </div>
          <button type="submit">Register</button>
          <div className={styles['login-link']}>
            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
