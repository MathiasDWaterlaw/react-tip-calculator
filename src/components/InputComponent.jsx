export default function InputComponent({ _value, setvalue }) {
  const handleChange = (event) => {
    setvalue(event.target.value);
  };
  return (
    <div>
      <input type='number' value={_value} onChange={handleChange} />
    </div>
  );
}
