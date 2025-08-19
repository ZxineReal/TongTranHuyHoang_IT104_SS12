const Calculation = () => {
  const a = 10;
  const b = 10;

  const sum = (num1: number, num2: number): number => num1 + num2;
  const sub = (num1: number, num2: number): number => num1 - num2;
  const mul = (num1: number, num2: number): number => num1 * num2;
  const div = (num1: number, num2: number): number => num1 / num2;
  return (
    <div>
      <h2>Danh sách kết quả</h2>
      <ul>
        <li>{a} + {b} = {sum(a,b)}</li>
        <li>{a} - {b} = {sub(a,b)}</li>
        <li>{a} * {b} = {mul(a,b)}</li>
        <li>{a} / {b} = {div(a,b)}</li>
      </ul>
    </div>
  );
};

export default Calculation;
