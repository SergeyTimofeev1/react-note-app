import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext)

  const submitHandler = event => {
    event.preventDefault()

    alert.show(value, 'success')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control mb-3"
          type="text"
          placeholder='Введите текст заметки'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
