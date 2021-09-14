import { useEffect, useState } from "react";

export const ShareCalculator = () => {
  const [value, setValue] = useState({ person: "", amount: 0, owed: 0 });

  const [values, setValues] = useState<any[]>([]);
  const [newValues, setNewValues] = useState<any[]>([]);

  const handleAddValue = () => {
    setValues((prevState) => [...prevState, value]);
  };

  useEffect(() => {
    console.log(values);
    const total = values.reduce((total, value) => total + value.amount, 0);
    const average = total / values.length;
    console.log("TOTAL", total);
    console.log("AVERAGE", average);
    const newValues = values.map((value) => {
      return {
        person: value.person,
        amount: value.amount,
        owed: average - value.amount,
      };
    });
    setNewValues(newValues);
  }, [values]);

  return (
    <div>
      <input
        type="text"
        value={value.person}
        onChange={(e) => setValue({ ...value, person: e.target.value })}
      />
      <input
        type="number"
        value={value.amount}
        onChange={(e) => setValue({ ...value, amount: +e.target.value })}
      />
      <button onClick={handleAddValue}>Adicionar</button>
      <ul>
        {newValues?.map((value, index) => (
          <li key={index}>
            <p>{value.name}</p>
            <p>{value.amount}</p>
            <p>{value.owed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
