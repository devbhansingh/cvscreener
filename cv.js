console.log("welcome to project 5");
// contain info about candidate array of an objects
const data = [
    {
        name: "Joe",
        age:19,
        city:"Delhi",
        language:"JS",
        framework:"Django",
        image: "https://randomuser.me/api/portraits/women/57.jpg"
    },

    {
        name: "Maya",
        age:19,
        city:"Mumbai",
        language:"Python",
        framework:"Flask",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    },

    {
        name: "Jack",
        age:20,
        city:"Pune",
        language:"C++",
        framework:"React",
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },

    {
        name: "Mike",
        age:21,
        city:"Goa",
        language:"JAVA",
        framework:"Angular",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    }
]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
