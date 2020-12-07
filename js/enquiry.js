const enquiryForm = document.getElementById('enquiryForm');

enquiryForm.addEventListener('submit', function (e) {
  //prevent default form behavior
  e.preventDefault();
  //   get the values of the Input fields
  let EmailValue = document.getElementById('enquiryEmail').value;
  let Number = document.getElementById('enquiryNumber').value;
  let Message = document.getElementById('enquiryMessage').value;
  //submit the form
  submitEnquiry(EmailValue, Number, Message);
});

// function handleSuccess() {
//   toastr['success']('Your enquiry has been submitted successfully');
//   //clear input field
//   let Email = document.getElementById('enquiryEmail');
//   let Number = document.getElementById('enquiryNumber');
//   let Message = document.getElementById('enquiryMessage');
//   Number.value = '';
//   Email.value = '';
//   Message.value = '';
// }

function validate(field, errordom) {
  if (field) {
    let element = document.getElementById(errordom);
    element.innerText = field;
    if (element.classList.contains('d-none')) {
      element.classList.toggle('d-none');
    }
  }
}

// function handleError(email, number) {
//   validate(email, 'enquiryEmailerror');
//   validate(number, 'enquiryNumbererror');

//   let element = document.getElementById('formSuccess');
//   if (!element.classList.contains('d-none')) {
//     element.classList.toggle('d-none');
//   }
// }

function submitEnquiry(EmailValue, Number, Message) {
  let postData = {
    email: EmailValue,
    phone_number: Number,
    enquiry: Message,
  };
  fetch('https://softkash-api.herokuapp.com/api/enquiries', {
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
        toastr['success']('Your enquiry has been submitted successfully');
      } else {
        // handleError(data.data.email[0], data.data['phone_number'][0]);
        for (const property in res.errors) {
          toastr['error'](res.errors[property]);
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
      }
    })
    .catch(function (err) {
      console.log(err);
      toastr['error']('An error has occured, please try again');
    });
}
