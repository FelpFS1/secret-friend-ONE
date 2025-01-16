let friendsList = []

function addFriend(){
    let friendName = document.getElementById('friend')
    if(friendName.value){
        friendsList.push(friendName.value)
        friendName.value = ''
        showFriendsList(friendName.value)
    }else{
        alert('Preencha o campo de nome!')
    }
    
}

function showFriendsList(){
    let list = document.getElementById('friendList')
    let elementList = document.createElement('li')

    for(index=0;index<friendsList.length;index++){
        elementList.innerHTML = `${friendsList[index]}`
        list.appendChild(elementList)
    }
    
}