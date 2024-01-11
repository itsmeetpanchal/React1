import React from 'react';

function Module3ListKay() {
  const students = [
    { id: 1, name: "Jethalal Gada" },
    { id: 2, name: "Atmaram Bhide" },
    { id: 3, name: "Tarak Maheta" },
    { id: 4, name: "Roshansing Sodhi" }
  ];

  return (
    <div>
      {
        students.map((student) => (
          <ul key={student.id}>
            <li>{student.name}</li>
          </ul>
        ))
      }
    </div>
  );
}

export default Module3ListKay;
