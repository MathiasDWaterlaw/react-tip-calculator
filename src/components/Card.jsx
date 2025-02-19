import "./Card.css";
import { useTipContext } from "../context/TipContext";
import InputComponent from "./InputComponent";

export default function Card() {
  const { bill, setBill } = useTipContext();
  return (
    <div className='Card'>
      <section className='.left'>
        <InputComponent _value={bill} setValue={setBill} />
      </section>
      <section className='.right'></section>
    </div>
  );
}
