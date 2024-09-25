document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    const profilePic = document.getElementById('profilePic') as HTMLImageElement;

    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', () => {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            } else {
                skillsSection.style.display = 'none';
            }
        });
    }
    
    fileInput.addEventListener('change', (event)=>{
        const file = (event.target as HTMLInputElement).files?.[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePic.src = e.target?.result as string;
                profilePic.style.display = 'block'; // Show the Image
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const fatherName = (document.getElementById('fathername') as HTMLInputElement).value;
        const cast = (document.getElementById('cast') as HTMLInputElement).value;
        const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
        const city = (document.getElementById('city') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        resumeContent.innerHTML = `
            <h1>${name} Resume</h1>
            <h4>Profile Picture</h4>
            <img src="${profilePic.src}" alt="Profile Picture" />
            <h3>Personal Information</h3>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Father's Name:</strong> ${fatherName}</p>
            <p><strong>Cast:</strong> ${cast}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>CNIC:</strong> ${cnic}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone No:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        resumeContent.style.display = 'block';
    });
});
