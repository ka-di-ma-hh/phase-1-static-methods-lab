class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let arr = string.split(' ')
    let newArr = []

    for(let i in arr){
      if(i==0){
        newArr.push(this.capitalize(arr[i]))
      }
      else{
        if(noCap.includes(arr[i])){
        newArr.push(arr[i])
        }
        else{
          newArr.push(this.capitalize(arr[i]))
        }
      
    }
  }
  return newArr.join(" ")

  }
}
