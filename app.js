let friendsList = []

function addFriend(){
    let friendName = document.getElementById('friend')
    if(friendName.value){
        friendsList.push(friendName.value)
        friendName.value = ''
    }else{
        alert('Preencha o campo de nome!')
    }
    
}
