function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}
const skills = {
    hardSkills: ['Programming Languages: C, C++, C#, Python, JavaScript', 'Web Development: HTML, CSS, JS, ASP.NET CORE, ASP.NET CORE MVC, ASP.NET CORE WebAPI, Razor Pages', 'Version Control: Git, GitHub', 'Linux, Bash, Windows'],
    softSkills: ['Teamwork', 'Problem Solving', 'Time Management', 'Smart Solutions', 'Work Dedication']
};
function populateSkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = `
        <div>
            <h3>Hard Skills</h3>
            <ul>${skills.hardSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </div>
        <div>
            <h3>Soft Skills</h3>
            <ul>${skills.softSkills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </div>
    `;
}
populateSkills();

const projects = [
    { name: "Web Development Portfolio", date: "Jan 2024" },
    { name: "Socket Programming(With Image Processing)", date: "Nov 2023" },
    { name: "Chess(Using SFML)", date: "May 2023" },
    { name: "Snake Game(Similar to Old Nokia Mobile Game)", date: "Feb 2023" },
    { name: "Shogi(Japanese Chess)", date: "Dec 2022" }
];
function populateProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML=`<ul>${projects.map(project => `<li><strong>${project.name}</strong> - <em>${project.date}</em></li>`).join('')}</ul>`;
}
populateProjects();
const sideProjects = [
    { name: "Hackathon: Competitive Programming competition", date: "March 2024" },
    { name: "Project: Charity Management System", date: "July 2024" }
];
function populateSideProjects() {
    const projectsList = document.getElementById('side-projects-list');
    projectsList.innerHTML=`<ul>${sideProjects.map(sideproject => `<li><strong>${sideproject.name}</strong> - <em>${sideproject.date}</em></li>`).join('')}</ul>`;
}
populateSideProjects();

const degrees = [
    { name: "Bachelor's Degree: Computer Science", institution: "Information Technology University, Lahore", date: "2022-Present" },
    {name: "Intermediate",institution: "Superior Group of Colleges",date:"2020-2022"},
    {name: "Matriculation",institution: "Govt. High School",date:"2018-2020"},
    {name: "Short Course: ASP.NET CORE",institution:"92 Logics", date: "JUNE 2024" }
];

function populateDegrees() {
    const projectsList = document.getElementById('degrees-list');
    projectsList.innerHTML=`<ul>${degrees.map(degree => `<li><strong>${degree.name}</strong> - <em>${degree.institution}   <b>${degree.date}</b></em></li>`).join('')}</ul>`;
}
populateDegrees();
const awards = [
    { name: "Prime Minister Youth Laptop Award", date: "April 2024" },
    { name: "Fully Merit Based Scholarship", date: "Since 2nd Semester" },
    { name: "1st Position in Superior College (BISE Gujranwala)", date: "Aug 2022" },
    { name: "Fully Funded Scholarship in College", date: "May 2020 - May 2022" },
    { name: "1st Position in School (BISE Gujranwala)", date: "Dec 2020" }
];

const languages = ['English: Conversational', 'Urdu: Fluent or native', 'Punjabi: Fluent', 'Saraiki: Conversational', 'Hindi: Conversational'];

function populateAwards() {
    const awardsList = document.getElementById('awards-list');
    awardsList.innerHTML = `<ul>${awards.map(award => `<li><strong>${award.name}</strong> - <em>${award.date}</em></li>`).join('')}</ul>`;
}
populateAwards();
function populateLanguages() {
    const languagesList = document.getElementById('languages-list');
    languagesList.innerHTML =  `<ul>${languages.map(language => `<li>${language}</li>`).join('')}</ul>`;
}
populateLanguages();
