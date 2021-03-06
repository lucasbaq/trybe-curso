const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const average = (acc, curr) => acc + curr;

function studentAverage() {
  // escreva seu código aqui
  return students.map( (value, index) => { 
    return {nome: value, average: grades[index].reduce(average, 0) / 5}} )
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];