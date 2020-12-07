<?php include ('header.php');
?>
       <!-- Page Banner -->
        <section class="pagebanner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bannerTitle text-left">
                            <h2>Sign In</h2>
                            <p>Sign in to your account</p>
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
                        <div style="padding-bottom:75px" class="formArea appareaBG">
                            <h3 class="mb-5" >Sign In</h3>
                            <p id='signinerror' class="text-danger small d-none"></p>
                            <form id='signInForm' class="applicationForm align-items-center">
                                <div class="col-lg-12 col-md-12">
                                    <input id='signInEmail' type="email" name="email" id="email" placeholder="Email" required>
                                </div>
								<div class="col-lg-12 col-md-12">
                                    <input type="password" id="signInPassword" placeholder="Password"
                                    required="" type="password" name="password" class="" required>
							   </div>					                   							   
							    <div class="col-lg-12  col-md-12 mb-5">
                                    <button name="submit" type="submit" id="submit" class="common_btn">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script src="js/signin.js"></script>
        <!-- Common Section -->  


<?php include ('footer.php');
?>
