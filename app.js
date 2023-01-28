const moonPath="M22.5 37.5C22.5 58.2107 37.5 75 37.5 75C16.7893 75 0 58.2107 0 37.5C0 16.7893 16.7893 0 37.5 0C37.5 0 22.5 16.7893 22.5 37.5Z";

const sunPath="M75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 0 58.2107 0 37.5C0 16.7893 16.7893 0 37.5 0C58.2107 0 75 16.7893 75 37.5Z";

let toggle=false;
const darkMode=document.getElementById("darkMode");

console.log(darkMode)

darkMode.addEventListener("click",()=>{
    const timeline= anime.timeline({
        duration:750,
        easing:"easeOutExpo"
    });
    timeline.add({
        targets:".sun",
        d:[
            {value:toggle?sunPath:moonPath}
        ]
    })
    .add({
        targets:"#darkMode",
        rotate:320
    },
    "-=350")
    .add({
        targets:"section",
        backgroundColor: toggle?"rgb(255,255,255)":"rgb(22,22,22)",
        color:toggle?"rgb(22,22,22)":"rgb(255,255,255)"
    },
    "-=700");

    if(!toggle){
        toggle=true
    }
    else{
        toggle=false
    }
    
});



