import IdCard from './components/id-card/IdCard';

import './App.css';

function App() {
  return (
    <div className="container py-5">
      <h3 className="mb-4">Iteration 1</h3>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        className="mb-2"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        className="mb-2"
      />
    </div>
  );
}

export default App;
