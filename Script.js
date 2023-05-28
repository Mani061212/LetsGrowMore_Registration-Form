var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var course = document.createElement("div");
    var Email = document.createElement("div");
    var gender = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML="Name: "+element[0].value;
    course.innerHTML="Website: "+element[1].value;
    Email.innerHTML="Email: "+element[2].value;
    img.src="images/user-img.jpg";
    img.alt="student image";
    if(element[3].value !=""){
        img.src=i;
    }
    if(element[4].checked){gender.innerHTML="Gender: Male";}
    if(element[5].checked){gender.innerHTML="Gender: Female";}
     if(element[6].checked){skills.innerHTML="Skills: JAVA";}
     if(element[7].checked){skills.innerHTML="Skills: HTML";}
     if(element[8].checked){skills.innerHTML="Skills: CSS";}
     if(element[9].checked){skills.innerHTML="Skills: JS";}
     if(element[6].checked && element[7].checked){skills.innerHTML="Skills: JAVA,HTML";}
     if(element[6].checked && element[8].checked){skills.innerHTML="Skills: JAVA,CSS";}
     if(element[6].checked && element[9].checked){skills.innerHTML="Skills: JAVA,JS";}
     if(element[7].checked && element[8].checked){skills.innerHTML="Skills: HTML,CSS";}
     if(element[7].checked && element[9].checked){skills.innerHTML="Skills: HTML,JS";}
     if(element[8].checked && element[9].checked){skills.innerHTML="Skills: CSS,JS";}
     if(element[6].checked && element[7].checked && element[8].checked){skills.innerHTML="Skills: JAVA,HTML,CSS";}

    div1.appendChild(name);
    div1.appendChild(course);
    div1.appendChild(Email);
    div1.appendChild(gender);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");

}