const getImage = (fileName) => { 
  return new URL(`./${fileName}`, import.meta.url).href 
}

export default getImage;
