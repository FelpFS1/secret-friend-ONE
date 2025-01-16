let friendsList = [];

function addFriend(){
    let friendName = document.getElementById('friend');
    let alertElement = document.getElementById('alert');
    let friendNameIsIncluded = friendsList.includes(friendName.value);
    if(friendName.value && !friendNameIsIncluded){
        friendsList.push(friendName.value);
        showFriendsList(friendName.value);
        cleanField(alertElement)
        cleanField(friendName)
        
    }else{
        let alertMessage = friendNameIsIncluded ? '⚠️ Nome duplicado, adicione outro! ⚠️' :  '⚠️ Preencha o campo de nome! ⚠️';
        alertElement.innerText = alertMessage;
        cleanField(friendName)
    };
    
};

function showFriendsList(){
    let list = document.getElementById('friendList');
    let elementList = document.createElement('li');

    for(index=0;index<friendsList.length;index++){
        elementList.innerHTML = `${index + 1} - ${friendsList[index]}`;
        list.appendChild(elementList);
    };
    
};

function cleanField(element){
    if(element.tagName == 'INPUT'){
        element.value = ''
    }else{
        element.innerText = ''
    }
}