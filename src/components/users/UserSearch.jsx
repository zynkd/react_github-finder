import { useState, useContext } from 'react';
import GithubContext from '../../contexts/github/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');
  const { users } = useContext(GithubContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter something');
    } else {
      // TODO - search users based on input
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                value={text}
                onChange={handleTextChange}
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
              />

              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg'>Clear</button>
        </div>
      )}
    </div>
  );
}
export default UserSearch;
