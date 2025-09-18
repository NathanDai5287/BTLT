function MyExampleBody() {
  return (
    <div>
      <h1>Hello, HTML!</h1>
      <p>This is a simple paragraph.</p>
      <a href="https://berkeleytime.com">Join Berkeleytime!</a>
    </div>
  );
}

export function MyApp() {
  return (
    <div>
      <h1>This is my app!</h1>
      <MyExampleBody />
    </div>
  );
}
