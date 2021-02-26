import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture, className}) {
  return (
    <div className={`IdCard border p-1 ${className} border-dark`}>
      <div className="d-flex">
        <img src={picture} alt={firstName} />
        <div className="contact-info">
          <ul>
            <li><strong>First name:</strong> {firstName}</li>
            <li><strong>Last name:</strong> {lastName}</li>
            <li><strong>Gender:</strong> {gender}</li>
            <li><strong>Height:</strong> {height}m</li>
            <li><strong>Birth:</strong> {birth.toDateString()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
