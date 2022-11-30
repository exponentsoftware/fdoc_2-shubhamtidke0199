// Using the countries array create the following array of arrays. The country name, 
// the first three letters of the country name and the length of the country name.

// EXPECTED OUTPUT : 
// createArrayOfArrays(countries)
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]



const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]



function arrayOfArray(arr){
    let newArray = []
    let titleCaseStr
    let firstThree
    let countryLength
  
    for(let i=0; i<arr.length;i++){
      titleCaseStr = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase()
      firstThree = arr[i].slice(0,3)
      countryLength = arr[i].length
      newArray.push([titleCaseStr,firstThree,countryLength])
    }
    return newArray
  }