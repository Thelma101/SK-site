const submitForm = document.getElementById('subscribeForm');

submitForm.addEventListener('submit', function (e) {
  //prevent default form behavior
  e.preventDefault();
  changeButtonText('Processing...');
  //   get the values of the Input fields
  let newsletterEmailValue = document.getElementById('newsletterEmail').value;
  let newsletterNumber = document.getElementById('newsletterNumber').value;
  //submit the form
  submitNewsletter(newsletterEmailValue, newsletterNumber);
});

function changeButtonText(text) {
  let submit = document.getElementById('newsLetterSubscribe');
  submit.innerHTML = text;
}

function handleSuccess() {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-full-width',
    preventDuplicates: false,
    onclick: null,
    showDuration: '4000',
    hideDuration: '4000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
  toastr['success'](
    'Congrats, you have successfully subscribed to our newsletter'
  );
  changeButtonText('Subscribe Now');
  //clear input field
  let newsletterEmail = document.getElementById('newsletterEmail');
  let newsletterNumber = document.getElementById('newsletterNumber');
  newsletterNumber.value = '';
  newsletterEmail.value = '';
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
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: 'toast-top-full-width',
    preventDuplicates: false,
    onclick: null,
    showDuration: '4000',
    hideDuration: '4000',
    timeOut: '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
  toastr['error'](email);
  toastr['error'](number);
  changeButtonText('Subscribe Now');
}

function submitNewsletter(newsletterEmailValue, newsletterNumber) {
  let postData = {
    email: newsletterEmailValue,
    phone_number: newsletterNumber,
  };
  (async () => {
    const rawResponse = await fetch(
      'https://softkash-api.herokuapp.com/api/news_letters',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(postData),
      }
    );
    const content = await rawResponse.json();
    if (content.success) {
      handleSuccess();
    } else {
      handleError(content.errors.email, content.errors['phone_number']);
    }
  })();
}
