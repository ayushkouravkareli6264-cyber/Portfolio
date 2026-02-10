const projectLink = document.getElementById('p');
projectLink.style.color = 'white';

projectLink.addEventListener('click', function(e) {

    e.preventDefault();
    const destination = this.href;


    this.style.color = 'blue';


    setTimeout(function() {
        window.location.href = destination;
    }, 300);
});