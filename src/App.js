import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/box/BoxColor';

import './App.css';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/rating/Rating';

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

      <h3 className="my-4">Iteration 2</h3>
      <Greetings lang="de" className="mb-1">Ludwig</Greetings>
      <Greetings lang="fr" className="mb-1">François</Greetings>

      <h3 className="my-4">Iteration 3</h3>
      <Random min={1} max={6} className="mb-1"/>
      <Random min={1} max={100} className="mb-1"/>

      <h3 className="my-4">Iteration 4</h3>
      <BoxColor r={255} g={0} b={0} className="mb-1"/>
      <BoxColor r={128} g={255} b={0} className="mb-1"/>
      <BoxColor r={0} g={0} b={0} className="mb-1"/>
      <BoxColor r={255} g={255} b={255} className="mb-1"/>

      <h3 className="my-4">Iteration 5</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col mb-2">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
        </div>
        <div className="col mb-2">
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
        </div>
        <div className="col mb-2">
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />
        </div>
      </div>
      
      <h3 className="my-4">Iteration 6</h3>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
