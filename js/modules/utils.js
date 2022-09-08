export default function pickRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
