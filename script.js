function nav(){
    const navba=document.getElementById('navbar');
    if(navba.style.display==='flex'|| navba.style.display==='undefined'){
        navba.style.display='none';
        navba.style.height='0';
    }
    else{
        navba.style.display='flex';
        navba.style.height='150px';
    }
}