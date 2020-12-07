const applyForm = document.getElementById('applyForm');

applyForm.addEventListener('submit', function (e) {
  //prevent default form behavior
  e.preventDefault();
  changeButtonText('Processing');
  //   get the values of the Input fields
  let firstName = document.getElementById('applyFirstName').value;
  let lastName = document.getElementById('applyLastName').value;
  let email = document.getElementById('applyEmail').value;
  let password = document.getElementById('applyPassword').value;
  let phone = document.getElementById('applyPhone').value;
  let gender = document.getElementById('applyGender').value;
  let address = document.getElementById('applyAddress').value;

  //submit the form
  submitApply(firstName, lastName, email, password, phone, gender, address);
});

function changeButtonText(text) {
  let submit = document.getElementById('submit');
  submit.innerHTML = text;
}

function handleSuccess() {
  changeButtonText('Done');
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

function handleError(email, number) {
  validate(email, 'emailError');
  validate(number, 'phoneError');

  // let element = document.getElementById('formSuccess');
  // if (!element.classList.contains('d-none')) {
  //   element.classList.toggle('d-none');
  // }
}

function submitApply(
  firstName,
  lastName,
  email,
  password,
  phone,
  gender,
  address
) {
  let postData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    phone_number: phone,
    gender: gender,
    address: address,
  };
  fetch('https://softkash-api.herokuapp.com/api/apply', {
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
        toastr['success'](
          res['response_message'] + ' Check your email for your details'
        );
        changeButtonText('Submit');
      } else {
        // handleError(data.data.email[0], data.data['phone_number'][0]);
        for (const property in res.data) {
          toastr['error'](res.data[property][0]);
        }
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
        validate(res.data.email[0], 'emailError');
        validate(res.data['phone_number'][0], 'phoneError');
        changeButtonText('Submit');
      }
    })
    .catch(function () {
      toastr['error']('An error has occured, please try again');
      validate('An error has occured, please try again', 'emailError');
      changeButtonText('Submit');
    });
}
