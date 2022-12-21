import React from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';

const Home = () => {

  const notes = new Array(3)
    .fill('')
    .map((_, i) => ({ id: i, title: `Item ${i}` }));

  return (
    <div>
      <Form />
      <Notes notes={notes} />
    </div>
  );
}

export default Home;
