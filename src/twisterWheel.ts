const randomItem = (arr: any[]) => arr[Math.floor(Math.random()*arr.length)];

const getRandomLimb = () => randomItem(['left foot', 'left hand', 'right foot', 'right hand']);

const getRandomColor = () => randomItem(['blue', 'green', 'yellow', 'red']);

export const getRandomMove = () => `${getRandomLimb()} to ${getRandomColor()}`;

