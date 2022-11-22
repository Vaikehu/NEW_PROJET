import * as React from 'react';
import './style.css';
import Card from './src/Card.tsx';

export default function App() {
  const [data, setData] = React.useState();
  const [name, setName] = React.useState();

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <Card />
      <Card />
      <Card />

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
