import { useState } from 'react'

function Button({children,initialValue = 0},myFunction = (count) => count + 1) {
  const [count, setValue] = useState(initialValue)
  return (
    <div>
      <button onClick={() => setValue(myFunction)}>
      {children}
      </button>
    </div>
  );
}

export default Button; 