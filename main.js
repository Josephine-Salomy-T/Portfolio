let homebtn=document.getElementById("homebtn");
let aboutDiv=document.getElementById("aboutDiv");

let edubtn=document.getElementById("edubtn");
let qualificationDiv=document.getElementById("qualificationDiv");

let skillbtn=document.getElementById("skillbtn");
let skillsDiv=document.getElementById("skillsDiv");

let projectsbtn=document.getElementById("projectsbtn");
let projectsDiv=document.getElementById("projectsDiv");


let showAbout=()=>{
    aboutDiv.scrollIntoView();
}

let showEdu=()=>{
    qualificationDiv.scrollIntoView();
}

let showSkill=()=>{
    skillsDiv.scrollIntoView();
}

let showProject=()=>{
    projectsDiv.scrollIntoView();
}

window.onload = function(){
homebtn.addEventListener("click",showAbout);
edubtn.addEventListener("click",showEdu);
skillbtn.addEventListener("click",showSkill);
projectsbtn.addEventListener("click",showProject);
};