function HelloPrint() {
  return <h1>Hello, React!</h1>;
}

export default function Hello() {
  return (
    <div>
      <HelloPrint />
    </div>
  );
}
