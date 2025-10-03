import { useState } from "react";

export function InputAge() {
  const nathan = { firstName: "Nathan", lastName: "Dai" };
  const [age, setAge] = useState(0);

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value) || 0)

  return (
    <div>
      <input type="text" value={age} onChange={handleAgeChange} />
      <p>The name is {nathan.firstName} {nathan.lastName} and
        he is <b>{age < 21 ? "underaged" : "of age"}</b>.</p>
    </div>
  );
}
