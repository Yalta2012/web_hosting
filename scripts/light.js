const light = document.querySelector('.light');
const checkbox = document.querySelector('#verydarkthemecheckbox');
let on = false;

checkbox.addEventListener("click",function(e)
{
    on=!on; 
    console.log(on);
    if(on)
    {
        let x=e.pageX/window.innerWidth*100;
        let y=e.pageY/2850*100;
        light.style.background=`radial-gradient(circle at ${x}% ${y}%, rgba(0,0,0,0), rgba(0,0,0,0.97) 180px)`;
        //light.style.background='rgba(0,0,0,0.9)';
        //console.log(x,y);
    }
    else
    {
        light.style.background='none';
    }
})


document.addEventListener("mousemove",function(e)
{
    
    if(on)
    {
        let x = e.pageX/window.innerWidth*100;
        let y = e.pageY/2850*100;
        //console.log(x,y);
        light.style.background=`radial-gradient(circle at ${x}% ${y}%, rgba(0,0,0,0), rgba(0,0,0,0.97) 180px)`;
    }
    else
    {
        light.style.background='none';
    }
})
document.addEventListener("wheel",function(e)
{
    
    if(on)
    {
        let x = e.pageX/window.innerWidth*100;
        let y = e.pageY/2850*100;
        //console.log(x,y);
        light.style.background=`radial-gradient(circle at ${x}% ${y}%, rgba(0,0,0,0), rgba(0,0,0,0.97) 180px)`;
    }
    else
    {
        light.style.background='none';
    }
})