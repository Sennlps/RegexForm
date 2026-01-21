//test
// var reg = /[a-z]/g;
////////andere manier om een regex te maken
// var reg2 = new RegExp(/[a-z]/, 'ig');
//[0-9]{10} kan ook, \d is hetzelfde als [0-9]

const inputs = document.querySelectorAll('input');

const patterns = { 
    // Mijn email regex (zelf geprobeerd) = email: /^[a-zA-Z]+@(gmail|hotmail|talnet)/.com$/i,
    //Echte email regex:
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-\\.]{8,20}$/,
    telephone: /^\d{10}$/
};

function validate(field, regex) {
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid'
    }
}

inputs.forEach((input) => {
 input.addEventListener('keyup', (e) => {
    //console.log(e.target.attributes.name.value)
    validate(e.target, patterns[e.target.name])
 });
});


