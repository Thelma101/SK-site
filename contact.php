<?php include ('header.php'); ?>


        <!-- Page Banner -->
        <section class="pagebanner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="bannerTitle text-left">
                            <h2>Contact Us</h2>
                            <p>We are here to render all the help <br>and support you might need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Page Banner -->   

        <!-- Common Section -->
        <section class="commonSection contactPage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="formArea">
                            <div class="row">
                                <div class="col-lg-7 col-md-7">
                                <p id='contactsuccess' class="text-success small d-none">**Congrats, you have successfully subscribed to our newsletter**</p>
                                <p id='contacterror' class="text-danger small d-none">**An error has occured, please check that you filled the form correctly**</p>
                                    <form class="contactFrom row" id="contactForm">
                                        <div class="col-md-6">
                                            <input  class="required" type="text"  name="f_name" id="f_name" placeholder="First name*">
                                        </div>
                                        <div class="col-md-6">
                                            <input class="required" type="text"  name="l_name" id="l_name" placeholder="Last name*">
                                        </div>
                                        <div class="col-md-12">
                                            <input class="required" type="email" name="email" id="email" placeholder="Email here*">
                                        </div>
                                        <div class="col-md-6">
                                            <input class="required" type="text" name="phone" id="phone" placeholder="Phone*">
                                        </div>
                                        <div class="col-md-6">
                                            <input class="required" type="text" name="address" id="address" placeholder="City*">
                                        </div>
                                        <div class="col-md-12">
                                            <textarea class="required" name="con_message*" id="con_message" placeholder="Text here...."></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button name="submit" type="submit" id="con_submit" class="common_btn">Send Message</button>
                                        </div>
                                    </form>
                                </div>
								
                                <div class="col-lg-5 col-md-5 noPaddingLeft">
								<iframe
									 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6893033391043!2d3.459925
										2142739405!3d6.433940295345088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5aa2
										e0a9c91%3A0x3abf365e0397573f!2s30%20Awkuzu%20St%2C%20Lekki%20Phase%20I%2C%20Lagos!5e0!3m2!1s
										en!2sng!4v1604843511201!5m2!1sen!2sng" width="700" height="700" frameborder="1" style="border:0;
										" allowfullscreen="" aria-hidden="false" tabindex="0">
								</iframe>
                                    <!-- <div class="gmap" id="gmap"></div> -->
									
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Common Section -->  
		
			<script>
  function initFreshChat() {
    window.fcWidget.init({
      token: "08eef900-6e1c-4690-949b-9f16289cec27",
      host: "https://wchat.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
</script>

        <!-- footer section -->
<?php include('footer.php'); ?>