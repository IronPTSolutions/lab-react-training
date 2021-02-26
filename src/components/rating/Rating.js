
function Rating({ children, max, className }) {
  const fullStars = Math.round(Number(children));
  const emptyStars = max - fullStars;
  return (
    <div className={`${className}`}>{'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}</div>
  );
}

Rating.defaultProps = {
  max: 5
}

export default Rating;
