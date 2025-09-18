import { useState } from "react";

export function BirthdayAge() {
  const [age, setAge] = useState(0);

  const handleBirthday = () => setAge((age) => age + 1)

  return (
    <div>
      <button onClick={handleBirthday}>Happy Birthday!</button>
      <p>The name is Nathan Dai and he is <b>{age < 21 ? "underaged" : "of age"}</b> ({age}).</p>
    </div>
  );
}
