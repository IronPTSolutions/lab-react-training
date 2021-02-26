
import Panel from '../panel/Panel';

function Random({ min, max, className }) {
  const number = Math.floor(Math.random() * max) + min; 
  return (
    <Panel className={className}>Random value between {min} and {max} => {number}</Panel>
  );
}

Random.defaultProps = {
  min: 0,
  max: 1
}

export default Random;
