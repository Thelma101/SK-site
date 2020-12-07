// const contactForm = document.getElementById('contactForm');

// contactForm.addEventListener('submit', function (e) {
//   //prevent default form behavior
//   e.preventDefault();
//   //   get the values of the Input fields
//   let firstNameValue = document.getElementById('f_name').value;
//   let lastNameValue = document.getElementById('l_name').value;
//   let emailValue = document.getElementById('email').value;
//   let phoneValue = document.getElementById('phone').value;
//   let addressValue = document.getElementById('address').value;
//   let contactMessageValue = document.getElementById('con_message').value;
//   //submit the form
//   submitNewsletter(
//     firstNameValue,
//     lastNameValue,
//     emailValue,
//     phoneValue,
//     addressValue,
//     contactMessageValue
//   );
// });

// function handleSuccess() {
//   let element1 = document.getElementById('contactsuccess');
//   if (element1.classList.contains('d-none')) {
//     element1.classList.toggle('d-none');
//   }
//   let element2 = document.getElementById('contacterror');
//   if (!element2.classList.contains('d-none')) {
//     element2.classList.toggle('d-none');
//   }
//   //clear input field
//   let firstNameValue = document.getElementById('f_name');
//   let lastNameValue = document.getElementById('l_name');
//   let emailValue = document.getElementById('email');
//   let phoneValue = document.getElementById('phone');
//   let addressValue = document.getElementById('address');
//   let contactMessageValue = document.getElementById('con_message');
//   firstNameValue.value = '';
//   lastNameValue.value = '';
//   emailValue.value = '';
//   phoneValue.value = '';
//   addressValue.value = '';
//   contactMessageValue.value = '';
// }
// function handleError() {
//   let element1 = document.getElementById('contacterror');
//   if (element1.classList.contains('d-none')) {
//     element1.classList.toggle('d-none');
//   }
//   let element2 = document.getElementById('contactsuccess');
//   if (!element2.classList.contains('d-none')) {
//     element2.classList.toggle('d-none');
//   }
// }

// function submitNewsletter(
//   firstNameValue,
//   lastNameValue,
//   emailValue,
//   phoneValue,
//   addressValue,
//   contactMessageValue
// ) {
//   let postData = {
//     first_name: firstNameValue,
//     last_name: lastNameValue,
//     email: emailValue,
//     phone_number: phoneValue,
//     city: addressValue,
//     message: contactMessageValue,
//   };
//   let axiosConfig = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//   };
//   axios
//     .post(
//       'https://softkash-api.herokuapp.com/api/contacts',
//       JSON.stringify(postData),
//       axiosConfig
//     )
//     .then((res) => {
//       handleSuccess();
//     })
//     .catch((err) => {
//       handleError();
//     });
// }
