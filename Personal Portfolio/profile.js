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