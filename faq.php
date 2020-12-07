

<?php include('header.php'); ?>

<head>
        <title>Frequently Asked Questions</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>      




        <!-- Page Banner -->
        <section class="pagebanner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bannerTitle text-left">
                            <h2>Frequently Asked Questions</h2>
                            <p> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Page Banner -->       

        <!-- Common Section -->
        <section class="commonSection faqPage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 faqPdRight">
                        <div class="singleFaq">
                            <h3>01. How do I apply for a loan? </h3>
                            <p>
                              Applying for a loan is easy! You can apply on our website or by downloading the SoftKash App, 
							  all you need to do is log in, fill in your personal details, phone number and bank details. 
							  You can then proceed to the “Request for loan” page on the app or website, go ahead to input
							   your loan amount and click “Request this Loan” to submit your request. 
                            </p>
                        </div>
                        <div class="singleFaq">
                            <h3>02. How much can I borrow? </h3>
                            <p>
                                Our loan sizes range from around ₦ 3,000 to ₦ 1,000,000. 
								If you repay loans as scheduled or before the scheduled time, the amount on your next borrow
								will be increased.
                            </p>
                        </div>
                        <div class="singleFaq">
                            <h3>03. How do you determine my loan offers? </h3>
                            <p>
                              The loan offers you see depend on a number of factors, including your 
							  repayment history with Softkash. If you repay each installment by its 
							  due date, you may unlock access to larger loans over time. Note that the 
							  increase may not always be immediate, 
							  and that repaying your loan late may result in smaller loan offers. 
                            </p>
                        </div>
						 <div class="singleFaq">
                            <h3>04. What interest rate does Softkash charge? </h3>
                            <p>
                             Interest rates are determined by a number of factors, for now our rates are as follows:<br>
							Loan repayment tenure: 2weeks to 15months <br>
							Late payment percentage: 2% to 10%
							 
                            </p>
                    </div>
					 <div class="singleFaq">
                            <h3>05. How should I repay SoftKash? </h3>
                            <p>
                              Several ways to repay a loan using the SoftKash App or the Web dashboard
							   includes wallet funding, direct paystack payment, direct debit card and USSD.
							   <br>
								If you are having trouble with repayments please contact us by using the 
								chat feature in the app. 
                            </p>
                        </div>
					<div class="col-lg-6 col-md-6 faqPdLeft">
                       </div>
                       
                        <div class="singleFaq">
                            <h3>06. Can someone else apply with my phone? </h3>
                            <p>
                             Once a phone has been used to access Softkash, it cannot 
							be used by anyone else. To access Softkash, kindly use another 
							phone that has not been used before. 

                            </p>
                        </div>
						</div>
					<div class="col-lg-6 col-md-6 faqPdRight">
						<div class="singleFaq">
                            <h3>07. What happens if I overpay my loan?  </h3>
                            <p>  	
   If you overpay your loan, the overpayment is credited to your account and 
used as part or full repayment, depending on the amount, on your next loan.
                            </p>
                        </div>
 						
						<div class="singleFaq">
                            <h3>08. What will happen if I miss my repayment?  </h3>
                            <p>  	
								Paying each installment by its due date is important 
								to build your credit score and increase your loan limit.
								Late repayments will affect your ability to get subsequent or larger loans. </p>
                        </div>
							<div class="singleFaq">
                            <h3>09. What will happen if I do not pay back a loan?  </h3>
                            <p>  	
							
								We may report to the National
								 Credit Reference Bureau (CRB). Being listed with the CRB will block you
								  from getting access to loans from other lenders and may also affect 
								your ability to get a job with certain employers.  </p>
                        </div>
						
						<div class="singleFaq">
                            <h3>10. How do I get a bonus for inviting friends? </h3>
                            <p>
                                Get your unique referral code and share with as many friends as you’d like. After a friend 
						downloads the app, make sure they enter your code on our “Referral” page. Once they repay their 
						first loan you will receive a credit bonus. Bonuses are automatically deducted from the amount of principal
						 you owe on your next loan. Kindly note that your friends must enter the code on their promotions page before 
						fully repaying their first loan or you won’t receive your bonus. 
                            </p>
                        </div>
						
						<div class="singleFaq">
                            <h3>11. How do I activate my referral code? </h3>
                            <p>

						Please advise the person who invited you to Softkash to send you their 
						promotion code, which is what you will enter in the “Promotions” page. 
						If you were not invited by anyone or you have already repaid your first 
						Softkash loan, the code will not be applicable. Kindly copy the code and 
						paste it in the Promotion Page.
                           </p>
                        </div>
						
						<div class="singleFaq">
                            <h3>12. How can I know my BVN?   </h3>
                            <p>
   						To know your BVN, dial *565*0# from the phone number linked to
						 your bank account. Please note that your provider may charge N20 for each check. 

                           </p>
                        </div>
						</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 text-center">
                        <h2 class="sec_title">
                            If you have other questions <br>please, fillup this form.
                        </h2>
                        <p id='formSuccess' class="text-success  small d-none mb-1">**Thanks for your enquiry, we'll get back to you as soon as possible**</p>
                        <form id='enquiryForm' class="questinForm row">
                            <div class="col-lg-6 col-md-6">
                                <p id='enquiryEmailerror' class="text-danger text-left small my-0"></p>
                                <input id='enquiryEmail' type="email" name="email" placeholder="info@anchorit.com.ng">
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <p id='enquiryNumbererror' class="text-danger text-left small my-0"></p>
                                <input id='enquiryNumber' type="number" name="phone" placeholder="08093667354">
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <textarea id='enquiryMessage' required="" name="message" placeholder="Enquiry...."></textarea>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <button class="common_btn" type="submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- Common Section -->
		<script src="js/enquiry.js"></script>
				<script>
  function initFreshChat() {
    window.fcWidget.init({
      token: "08eef900-6e1c-4690-949b-9f16289cec27",
      host: "https://wchat.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
</script>

		
		<?php include('footer.php'); ?>
