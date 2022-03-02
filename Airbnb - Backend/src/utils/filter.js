function filterData(obj) {
 
    let arr = []
      for (key in obj) {
        let temp = false
        if (
          key === 'price' ||
          key === 'beds' ||
          key === 'bedrooms' ||
          key === 'bathrooms'||
          key==="typeofplace"
        ) {
          temp = {$gte :obj[key]}
        } else if (obj[key] === 'true') {
          temp = true
        }
    
        arr.push({
          [key]: temp,
        })
      }
    //  console.log(arr)
      return arr
  }

  module.exports=filterData