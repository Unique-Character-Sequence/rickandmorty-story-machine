const randomNumberInRange = (min, max) => {
    // get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default randomNumberInRange