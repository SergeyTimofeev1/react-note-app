import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <input
            className="form-control mb-3"
            type="text"
            placeholder='Введите текст заметки'
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
