const body = document.querySelector("body");
const newFooter = document.createElement("footer");
body.appendChild(newFooter);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = "© Julian Alvarado " + thisYear;

footer.appendChild(copyright);

const skills = [
    "HTML",
    "CSS",
    "Python",
    "JavaScript",
    "GitHub",
    "VS Code",
    "Problem Solving",
    "Canva",
    "Spanish"
];

const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML =
    '<a href="mailto:' + usersEmail + '">' + usersName + '</a> ' + 
    '<span>' + usersMessage + '</span>';

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});
