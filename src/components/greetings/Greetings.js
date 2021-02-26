
function Greetings({ lang, className, children }) {
  let greet;
  switch (lang) {
    case 'en': 
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    case 'de':
      greet = 'Hallo';
      break;
    default:
      greet = 'Hello';
  }

  return (
    <div className={`border border-2 border-dark p-2 ${className}`}>
      <h5 className="m-0">{greet} {children}</h5>
    </div>
  )
}

export default Greetings;
