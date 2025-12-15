import './App.css';
import Display from './components/Display';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const students = [
    { id: 1, name: "Phạm Chiến", age: 28 },
    { id: 2, name: "Phạm Chung", age: 35 },
    { id: 3, name: "Phạm Hiếu", age: 34 },
  ]

  return (
    <div>
      <Display setCount={setCount} />
      <h1>Count: {count}</h1>
      <table>
        <thead>
          <tr>
            <th>TD</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;