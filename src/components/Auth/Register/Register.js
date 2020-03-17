import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import './Register.css';

const Register = ({ setAlert }) => {
  // init state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  // on change handler
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      // REDUX ACTION HERE
      setAlert('passwords dont match', 'danger');
    }
    // REDUX ACTION HERE
    console.log(formData);
  };

  return (
    <div className='container register'>
      <div className='jumbotron'>
        <h1>
          Inspire. Share. <span>Create.</span>
        </h1>
        <div className='diagonal'></div>
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Full Name</label>
          <input
            type='name'
            className='form-control'
            id='name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Re-Enter Password</label>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>

        <button type='submit' className='register-btn btn btn-primary'>
          Submit
        </button>
      </form>
      <p>
        Alredy have an account?{' '}
        <Link to='/login' className='sign-in-msg'>
          Sign In
        </Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

// connect takes two args. First is any state to map. Second is object with any actions to bring in
// connect also allows us to use actions as props
export default connect(null, { setAlert })(Register);
