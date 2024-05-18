import React from 'react';

function ErrorForm({children}: {children:React.ReactNode}) {
  return (
    <div className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm
    '>
      {children}
    </div>
  );
}

export default ErrorForm;
