fetch("https://randomuser.me/api/").then(function (userfile) {
    return userfile.json()
}).then(response => {
    let result = response.results[0]
    let serverPicture = result.picture.large;
    let pic = document.querySelector('#profilepics');
    pic.src = serverPicture;
    // console.log(result)

    let name = result = response.results[0].name;
    let firstname = name.first;
    document.querySelector('#fname').innerHTML = firstname;
    // console.log(firstname)
    let lastname = name.last;
    document.querySelector('#lname').innerHTML = lastname;


    let location = result = response.results[0].location;
    let streetnumber = location.street.number;
    document.querySelector('#stno').innerHTML = streetnumber;
    // console.log(streetnumber)

    let streetname = location.street.name;
    document.querySelector('#stna').innerHTML = streetname;
    // console.log(streetname)

    let city = result = response.results[0].location;
    let thecity = location.city
    document.querySelector('#city').innerHTML = thecity;
    // console.log(thecity)

    let state = location.state;
    document.querySelector('#state').innerHTML = state;
    // console.log(state)

    let country = location.country;
    document.querySelector('#Country').innerHTML = country;

    let postcode = location.postcode;
    document.querySelector('#postcode').innerHTML = postcode;

    let latitude = location.coordinates.latitude;
    document.querySelector('#ltt').innerHTML = latitude;
    // console.log(latitude)

    let longitude = location.coordinates.longitude;
    document.querySelector('#lgtt').innerHTML = longitude;

    let mail = result = response.results[0].email;
    document.querySelector('#email').innerHTML = mail;

    let password = result = response.results[0].login;
    let passwordt = password.username;
    document.querySelector('#pwd').innerHTML = passwordt;

    let username = result = response.results[0].login;
    document.querySelector('#usern').innerHTML = username;

    let dateofb = result = response.results[0].dob;
    let dateofbt = dateofb.date;
    document.querySelector('#dob').innerHTML = dateofbt;

    let age = result = response.results[0].dob;
    let dateofage = age.age;
    document.querySelector('#Age').innerHTML = dateofage;

    let reg = result = response.results[0].registered;
    let dateofreg = reg.date;
    document.querySelector('#reg').innerHTML = dateofreg;

    let agereg = result = response.results[0].registered;
    let dateofreg1 = reg.age;
    document.querySelector('#agereg').innerHTML = dateofreg1;

    let phone = result = response.results[0].phone;
    document.querySelector('#pno').innerHTML = phone;

    let cell = result = response.results[0].cell;
    document.querySelector('#cell').innerHTML = cell;

    let ssn = result = response.results[0].id.name;
    document.querySelector('#id').innerHTML = ssn;

    let idvalue = result = response.results[0].id.value;
    document.querySelector('#Value').innerHTML = idvalue;

})