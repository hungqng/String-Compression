function compress(message){
    let answer = ""
    let messageArray = message.split("")
    for (let i = 0; i < messageArray.length; i++){
      let count = 1
      let currentLetter = messageArray[i]
      while (i < messageArray.length - 1 && messageArray[i] === messageArray[i + 1]){
        count++
        i++
      }
      if (count === 1){
        answer += currentLetter
      } else {
        answer += currentLetter + count
      }
    }
    return answer
 }