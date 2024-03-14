const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateFullName = () => {
  const names = [
    'Ana',
    'Bruno',
    'Carlos',
    'Daniela',
    'Eduardo',
    'Fernanda',
    'Gabriel',
    'Helena',
    'Ígor',
    'Juliana',
  ];
  const lastNames = [
    'Silva',
    'Santos',
    'Oliveira',
    'Souza',
    'Rodrigues',
    'Ferreira',
    'Almeida',
    'Pereira',
    'Lima',
    'Costa',
  ];

  const name = getRandomItem(names);
  const lastName = getRandomItem(lastNames);
  return name + ' ' + lastName;
};
