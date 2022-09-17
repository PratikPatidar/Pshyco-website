// nav bar responsive using javascript
let Hamburg = document.querySelector('.hamburg');
let navbar = document.querySelector('#nav');
let rightnav = document.querySelector('.rightnav');
let navlist = document.querySelector('.nav-list');


Hamburg.addEventListener('click', () => {
    rightnav.classList.toggle('visibality-class');
    navlist.classList.toggle('visibality-class');
    navbar.classList.toggle('h-nav');

});



// when Assessments button on nav bar clicked
document.getElementById('Assessments').onclick = function () { Assessments() };//accesing help

// call help() function
function Assessments() {

    //change container innner html
    document.querySelector('.container').innerHTML =
        ` 

<nav  id="nav">
<div class="logo">
    <img src="logo.png" alt="Birds">
</div>
<ul class="visibality-class nav-list">
    <li class="items"> <a href="#">Home</a></li>
    <li class="items" id="Assessments"> <a href="#">Assessments</a></li>
    <li class="items"> <a href="#">Book-Book_Session</a></li>
    <li class="items"> <a href="#">Experts</a></li>
    <li class="items"> <a href="#">About</a></li>
</ul>
<div class="rightnav visibality-class"></div>
<div class="hamburg ">&#9776</div>
<button class="join-us">&#9990 Join Us</button>
</nav>



<div >
<h1>We will working on the page</h1>
</div>`
        ;
}

//when product button get click
document.getElementById('Book-Session').onclick = function () { Book_Session() };
function Book_Session() {
    document.querySelector('.container').innerHTML = `
<h1>We will work on this site</h1>
`;
}

//when promotion button get click
document.getElementById('Experts').onclick = function () { Experts() };
function Experts() {
    document.querySelector('.container').innerHTML = `
<h1>We will work on this site</h1>
`;
}

//when About button get click
document.getElementById('About').onclick = function () { About() };
function About() {
    document.querySelector('.container').innerHTML = `
<h1>We will work on this about page</h1>
`;
}

//when join-us buttom clicked
let joinus = document.getElementsByClassName('join-us');  // getting elements of 'join-us' class
joinus.addEventListener('click', function () { join_us() });
function join_us() {
    document.querySelector('.join-us').innerHTML = `
Welcome to our website
`;
}


//on clicking on appomiment button
let read = document.getElementById('appomiment');
read.addEventListener('click', function () { appomiment() });   //Listing the event
function appomiment() {                                         // Function fired
    document.querySelector('.container').innerHTML = `
<h2>
our plans 
</h2>
<P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas repudiandae excepturi hic culpa animi eius nesciunt dolorem voluptate. Corrupti voluptatibus odit eligendi!</P>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi corporis, culpa tempore neque reprehenderit adipisci consectetur aut distinctio totam libero facilis quis.</p>
`;
}

// when the footer button got clicked
document.querySelector('.btn').onclick = function () { btnclick() };
function btnclick() {
    document.querySelector('.container').innerHTML = `
"Error 404"
`;
}