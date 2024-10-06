document.getElementById('faculty-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const department = document.getElementById('department').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bio = document.getElementById('bio').value;
    const research = document.getElementById('research').value.split(',');

    const profileDisplay = document.getElementById('profile-display');
    const profileInfo = document.querySelector('.profile-info');

    profileInfo.innerHTML = `
        <h3>${name}</h3>
        <h4>${title}</h4>
        <h5>${department}</h5>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h6>Biography</h6>
        <p>${bio}</p>
        <h6>Research Interests</h6>
        <ul>
            ${research.map(item => `<li>${item.trim()}</li>`).join('')}
        </ul>
    `;

    profileDisplay.style.display = 'block';
});
