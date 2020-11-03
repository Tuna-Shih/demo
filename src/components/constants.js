import { v4 as uuidv4 } from 'uuid';

const data = [
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
  { id: uuidv4(), image: '/cat.jpg' },
];

const formData =
  data.length % 3 === 0
    ? data
    : data.length % 3 === 1
    ? [...data, { id: uuidv4(), image: '' }, { id: uuidv4(), image: '' }]
    : [...data, { id: uuidv4(), image: '' }];

export default formData;
