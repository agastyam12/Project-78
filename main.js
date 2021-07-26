var familyMemberInformation = [
    ['./images/Agastya.jpg', 'Agastya Mishra'], 
    ['./images/Advik.jpg', 'Advik Mishra'], 
    ['./images/Anagh.jpg', 'Anagh Mishra'],
    ['./images/Mom and Dad.jpg', 'Meenakshi Mishra & Ashutosh Mishra']
];

var totalFamilyNames = familyMemberInformation.length;
var i = 0;
function update() {       
    if ( i == totalFamilyNames) {
        i = 0;
    }
    document.getElementById("Family_Member_Image").src = familyMemberInformation[i][0];
    document.getElementById("Family_Member_Name").innerHTML = familyMemberInformation[i][1];
    i = i + 1;
} 