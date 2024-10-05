document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills-section');
    var form = document.getElementById('resumeForm');
    var resumeContent = document.getElementById('resumeContent');
    var fileInput = document.getElementById('fileInput');
    var profilePic = document.getElementById('profilePic');
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
    fileInput.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                profilePic.style.display = 'block'; // Show the Image
            };
            reader.readAsDataURL(file);
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var fatherName = document.getElementById('fathername').value;
        var cast = document.getElementById('cast').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var city = document.getElementById('city').value;
        var address = document.getElementById('address').value;
        var cnic = document.getElementById('cnic').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        resumeContent.innerHTML = "\n            <h1>".concat(name, " Resume</h1>\n            <h4>Profile Picture</h4>\n            <img src=\"").concat(profilePic.src, "\" alt=\"Profile Picture\" />\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong><span contenteditable=\"true\">").concat(name, "</span></p>\n            <p><strong>Father's Name:</strong><span contenteditable=\"true\"> ").concat(fatherName, "</span></p>\n            <p><strong>Cast:</strong><span contenteditable=\"true\"> ").concat(cast, "</span></p>\n            <p><strong>Gender:</strong><span contenteditable=\"true\"> ").concat(gender, "</span></p>\n            <p><strong>City:</strong><span contenteditable=\"true\"> ").concat(city, "</span></p>\n            <p><strong>Address:</strong><span contenteditable=\"true\"> ").concat(address, "</span></p>\n            <p><strong>CNIC:</strong><span contenteditable=\"true\"> ").concat(cnic, "</span></p>\n            <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n            <p><strong>Phone No:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        resumeContent.style.display = 'block';
    });
});
