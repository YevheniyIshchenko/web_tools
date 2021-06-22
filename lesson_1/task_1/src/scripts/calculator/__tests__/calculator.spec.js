import { sum, mult} from '../calculator';

it('should return sum', () => {
  const result = sum(5, 5);
  expect(result).toEqual(10);
});

it('should return mult', () => {
  const result = mult(5, 5);
  expect(result).toEqual(25);
});