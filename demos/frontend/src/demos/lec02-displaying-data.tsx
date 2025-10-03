function Underaged() {
  return (
    <b>underaged</b>
  );
}

function OfAge() {
  return (
    <b>of age</b>
  );
}

export function PersonHighlight() {
  const nathan = { firstName: "Nathan", lastName: "Dai", age: 22 };

  return (
    <div>
      <p>The name is {nathan.firstName} {nathan.lastName} and
        he is {nathan.age < 21 ? <Underaged /> : <OfAge />}.</p>
    </div>
  );
}
