import './Button.css'

function Button({classNames,children,myFunction = ()=>{}}) {
  return (
      <button className={classNames} onClick={() => myFunction()}>
      {children}
      </button>
    
  );
}

export default Button; 