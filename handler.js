if(localStorage.getItem('jwt') == null){
    document.getElementById('in-btn').style.display = "none";
    document.getElementById('logout-btn').style.display = "none";
}

function logout() {
    localStorage.removeItem('jwt');
    console.log('removed')
}
  
document.getElementById('logout-btn').addEventListener('click',logout());