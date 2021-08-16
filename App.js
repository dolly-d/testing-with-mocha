module.exports = {
    goodJob: function(){
        return 'Girl you doing a good job!'
    },

    addNumber: function(val1,val2){
        return val1 + val2
    },

    isPalindrome: function(str){
      let splitStr = str.split('').reverse().join('')

        if(splitStr === str){
            console.log('true')
            return true
        }else {
            console.log('false')
            return false
        }
    }
}