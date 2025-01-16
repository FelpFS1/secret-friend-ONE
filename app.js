let friendsList = [];
let listColors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF0", 
    "#FFFF33", "#FF8C33", "#8C33FF", "#33FF8C", "#FFFFFF", "#000000", 
    "#808080", "#B22222", "#4682B4", "#E9967A", "#8B008B", "#20B2AA", 
    "#FFD700", "#7CFC00", "#1E90FF", "#F08080", "#DA70D6", "#40E0D0", 
    "#FFA07A", "#2E8B57", "#6A5ACD", "#FF4500", "#708090", "#D2691E", 
    "#FF1493", "#ADFF2F", "#00CED1", "#B0C4DE", "#696969", "#8A2BE2", 
    "#5F9EA0", "#FF6347", "#00FA9A", "#DC143C", "#FFB6C1", "#4682B4", 
    "#B8860B", "#2F4F4F", "#CD5C5C", "#32CD32", "#87CEEB", "#9932CC", 
    "#FF69B4", "#7B68EE", "#98FB98", "#FFDAB9", "#DDA0DD", "#8B4513", 
    "#D8BFD8", "#FFFFE0", "#FFFACD", "#F5F5DC"
  ];
  
let alertElement = document.getElementById('alert');
let friendName = document.getElementById('friend');
function addFriend(){
    let friendNameIsIncluded = friendsList.includes(friendName.value);
    if(friendName.value && !friendNameIsIncluded){
        friendsList.push(friendName.value);
        showFriendsList(friendName.value);
        cleanField(alertElement)
        cleanField(friendName)
        
    }else{
        showAlert(friendName,friendNameIsIncluded)
    };
    
};

function showAlert(friendName,isIncluded,message){
    let alertMessage = isIncluded ? '⚠️ Nome duplicado, adicione outro! ⚠️' :  '⚠️ Preencha o campo de nome! ⚠️';
    alertElement.innerText = message || alertMessage
    cleanField(friendName)
}

function showFriendsList(){
    let list = document.getElementById('friendList');
    let elementList = document.createElement('li');

    for(index=0;index<friendsList.length;index++){
        elementList.innerHTML = `<i class="fa-solid fa-user" style="color:${listColors[index]}"></i> ${friendsList[index]}`;
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

function drawFriend(){
    let showResult = document.getElementById('result')
    let elementList = document.createElement('li');
    cleanField(showResult)
    
    if(friendsList.length > 0){
        const randomFriendNumber = parseInt(Math.random() * friendsList.length)
        elementList.innerHTML= `${friendsList[randomFriendNumber]}`
        showResult.appendChild(elementList) 
    }else{
        showAlert(friendName,null,"⚠️ Lista vazia, adicione alguém! ⚠️")
        
    }
}