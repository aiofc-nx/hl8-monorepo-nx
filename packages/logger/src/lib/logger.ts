import { LOGGER_NAME } from './constants.js';
export function logger(): string {
  return 'logger';
}

export const hello = () => {
  console.log(LOGGER_NAME);
};