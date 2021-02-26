import './CreditCard.css';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, className }) {

  let cardLogo;
  switch(type) {
    case 'Master Card':
      cardLogo = 'master-card.svg';
      break;
    case 'Visa':
      cardLogo = 'visa.png';
      break;
    default:
      cardLogo = 'visa.png';
  }
  number = number.split('')
    .reduce((mask, n, i) => {
      const value = i < 12 ? '•' : n;
      return `${mask}${value}${(i + 1) % 4 === 0 ? ' ' : ''}`;
    }, '');

  return (
    <div className={`CreditCard p-3 rounded-3 ${className}`} style={{ backgroundColor: bgColor }}>
      <div className="text-end mb-2"><img src={`/img/${cardLogo}`} width="45" alt={type} /></div>
      <h4 style={{ color }}>{number}</h4>
      <p className="m-0" style={{ color }}><span>Expires {expirationMonth}/{expirationYear}</span> <span>{bank}</span></p>
      <p className="m-0" style={{ color }}>{owner}</p>
    </div>
  )
}

export default CreditCard;
