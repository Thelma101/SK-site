<?php include ('header.php');
?>


       <!-- Page Banner -->
        <section class="pagebanner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bannerTitle text-left">
                            <h2>Application Form</h2>
                            <p> Kindly fill the form accurately to increase<br>your chances of getting approved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Page Banner -->   

        <!-- Common Section -->
        <section class="commonSection applicationPage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="formArea appareaBG">
                            <form id='applyForm' class="applicationForm row">
                           <!--     <div class="col-lg-3 col-md-4">
                                    <input type="number" step="any" name="amount" placeholder="Loan amount ($)">
                                </div>
                                <div class="col-lg-3 col-md-4">
                                    <input type="text" name="purpose" placeholder="Purpose of loan">
                                </div>
                                
                                <div class="col-lg-3 col-md-4">
                                    <input type="text" name="birth" placeholder="Date of birth">
                                </div> -->
                                <div class="col-lg-6 col-md-6">
                                    <input id='applyFirstName' type="text" name="name" placeholder="First Name" required>
                                </div>  <div class="col-lg-6 col-md-6">
                                    <input id='applyLastName' type="text" name="name" placeholder="Last Name" required>
                                </div>
								
                                <div class="col-lg-6 col-md-6">
                                    <input id='applyEmail' type="email" name="email" id="email" placeholder="Email" required>
                                </div>
								<div class="col-lg-6 col-md-6">
                                    <input type="password" id="applyPassword" placeholder="Password" minlength="6"
                                    required="" type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$" 
                                    name="password" class="" required>
							   </div>
							   <div class="col-lg-6 col-md-6">
                                    <input id='applyPhone' type="text" name="phone" placeholder="Phone no." required>
                                </div>                                
                                <div class="col-lg-6 col-md-6">
                                    <input id='applyGender' type="text" name="gender" placeholder="Gender - female/male" required>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <input id='applyAddress' type="text" name="Address" placeholder="7, d street, emerald estate, Lekki." required>
                                </div>                    							   
							    <div class="col-lg-12  col-md-12 mb-5">
                                    <button name="submit" type="submit" id="submit" class="common_btn">Create Your Account</button>
                                </div>
								<p class="col-lg-12 col-md-12"> By continuing, you agree to our <a href="https://www.softkash.co/terms.php" target="_blank" 
								class="">Terms and Conditions</a> of service and <a href="https://www.softcash.co/privacy.php"
								 target="_blank" class="text-alt">Privacy Policy.</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Common Section -->  
        <script src="js/apply.js"></script>


<?php include ('footer.php');
?>
