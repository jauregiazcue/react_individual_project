import './Button.css'

function Button({children,myFunction}) {
  return (
    <div>
      <button onClick={() => myFunction()}>
      {children}
      </button>
    </div>
  );
}

export default Button; 