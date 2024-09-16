document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills-section');
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var resumeContent = document.getElementById('resumeContent');
    if (toggleButton && skillsSection) {
        toggleButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        });
    }
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var fatherName = document.getElementById('fathername').value;
        var cast = document.getElementById('cast').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var address = document.getElementById('address').value;
        var cnic = document.getElementById('cnic').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        resumeContent.innerHTML = "\n            <h2>".concat(name, " Resume</h2>\n            <h3>Personal Information</h3>\n            <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n            <p><strong>Cast:</strong> ").concat(cast, "</p>\n            <p><strong>Gender:</strong> ").concat(gender, "</p>\n            <p><strong>Address:</strong> ").concat(address, "</p>\n            <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone No:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        resumeOutput.style.display = 'block';
    });
});
