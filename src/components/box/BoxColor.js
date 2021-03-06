

function BoxColor({ r, g, b, className}) {

  function toHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  const textColor = yiq > 128 ? 'dark' : 'white';

  return (
    <div className={`border border-dark border-2 p-4 text-${textColor}  d-flex flex-column align-items-center ${className}`} style={{ backgroundColor: `rgb(${r},${g},${b})`}}>
      <span className="fs-4">rgb({r},{g},{b})</span>
      <span className="fs-4">#{`${toHex(r)}${toHex(g)}${toHex(b)}`}</span>
    </div>
  );
}

export default BoxColor;
