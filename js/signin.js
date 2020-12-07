const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', function (e) {
  //prevent default form behavior
  e.preventDefault();
  changeButtonText('Processing...');
  //   get the values of the Input fields
  let email = document.getElementById('signInEmail').value;
  let password = document.getElementById('signInPassword').value;
  //submit the form
  console.log('here');
  console.log(email, password);
  signIn(email, password);
});

function changeButtonText(text) {
  let submit = document.getElementById('submit');
  submit.innerHTML = text;
}

function handleSuccess() {
  console.log('successful');
  let submit = document.getElementById('submit');
  submit.innerHTML = 'Done';
  //   let element1 = document.getElementById('formSuccess');
  //   if (element1.classList.contains('d-none')) {
  //     element1.classList.toggle('d-none');
  //   }
  //   let element2 = document.getElementById('enquiryEmailerror');
  //   if (!element2.classList.contains('d-none')) {
  //     element2.classList.add('d-none');
  //   }
  //   let element3 = document.getElementById('enquiryNumbererror');
  //   if (!element3.classList.contains('d-none')) {
  //     element3.classList.add('d-none');
  //   }
  //   //clear input field
  //   let Email = document.getElementById('enquiryEmail');
  //   let Number = document.getElementById('enquiryNumber');
  //   let Message = document.getElementById('enquiryMessage');
  //   Number.value = '';
  //   Email.value = '';
  //   Message.value = '';
}

function validate(field, errordom) {
  if (field) {
    let element = document.getElementById(errordom);
    element.innerText = field;
    if (element.classList.contains('d-none')) {
      element.classList.toggle('d-none');
    }
  }
}

function handleError() {
  console.log('error');
  //   validate(error, 'signinerror');

  //   validate(email, 'enquiryEmailerror');
  //   validate(number, 'enquiryNumbererror');

  //   let element = document.getElementById('formSuccess');
  //   if (!element.classList.contains('d-none')) {
  //     element.classList.toggle('d-none');
  //   }
}

function signIn(email, password) {
  let postData = {
    email: email,
    password: password,
  };
  fetch('https://softkash-api.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(postData),
  })
    .then(function (data) {
      return data.json();
    })
    .then(function (res) {
      if (res.success) {
        toastr['success']('Sign In Successful, Please Check your email');
      } else {
        // handleError(data.data.email[0], data.data['phone_number'][0]);
        toastr['error'](res.data);
        changeButtonText('Sign In');
        //toaster options
        toastr.options = {
          closeButton: true,
          debug: false,
          newestOnTop: false,
          progressBar: false,
          positionClass: 'toast-top-full-width',
          preventDuplicates: false,
          onclick: null,
          showDuration: '3000',
          hideDuration: '4000',
          timeOut: '5000',
          extendedTimeOut: '1000',
          showEasing: 'swing',
          hideEasing: 'linear',
          showMethod: 'fadeIn',
          hideMethod: 'fadeOut',
        };
      }
    })
    .catch(function (err) {
      toastr['error']('An error has occured, please try again');
      changeButtonText('Sign In');
    });
}
