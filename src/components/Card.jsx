import "./Card.css";
import { useTipContext } from "../context/TipContext";
import InputComponent from "./InputComponent";

export default function Card() {
  return (
    <div className='Card'>
      <section className='.left'></section>
      <section className='.right'></section>
    </div>
  );
}
