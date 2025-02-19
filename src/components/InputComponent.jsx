export default function InputComponent({ _value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input type='number' value={_value} onChange={handleChange} />
    </div>
  );
}
