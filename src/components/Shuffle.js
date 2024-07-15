export const Shuffle = (array)=> {
    const newArray = array.concat(array)
    return newArray.sort(() => Math.random() - 0.5);
   
}