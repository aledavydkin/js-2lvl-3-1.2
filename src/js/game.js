const data = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export const sortArray = function(array) {
  return array.sort((a, b) => b.health - a.health);
};


export default data;
