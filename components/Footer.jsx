export default function Footer() {
  return (
    <>

	<div className="footer mt-0">
		<div className="container">
			<div className="row py-1 py-md-2 px-lg-0">
				<div className="col-lg-4 footer-col1">
					<div className="row flex-column flex-md-row flex-lg-column">
						<div className="col-md col-lg-auto">
							<div className="footer-logo">
								<a href="/" className="header-logo">
									<img src="/images/logo.png" className="img-fluid" alt="" />	
								</a>
							</div>
							<div className="mt-2 mt-lg-0"></div>
							<div className="footer-social d-lg-none">
								<a href="https://www.facebook.com/dermaplusclinic" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
								<a href="https://www.twitter.com/dermaplus" target="blank" className="hovicon"><i className="icon-twitter-logo"></i></a>
								<a href="https://www.instagram.com/dermaplusclinic" target="blank" className="hovicon"><i className="icon-instagram"></i></a>
								<a href="https://www.youtube.com/dermaplus" target="blank" className="hovicon"><i className="icon-youtube-play"></i></a>
							</div>
						</div>
						<div className="col-md">
							<div className="footer-text mt-1 mt-lg-2">
								<p>Subscribe to receive expert tips, offers
									<br />& updates from DermaPlus Clinic</p>
								<form action="#" className="footer-subscribe">
									<div className="input-group">
										<input name="subscribe_mail" type="text" className="form-control" placeholder="Your Email Address" />
										<span><i className="icon-black-envelope"></i></span>
									</div>
								</form>
							</div>
							<div className="footer-social d-none d-lg-block">
								<a href="https://www.facebook.com/dermaplusclinic" target="blank" className="hovicon"><i className="icon-facebook-logo"></i></a>
								<a href="https://www.twitter.com/dermaplus" target="blank" className="hovicon"><i className="icon-twitter-logo"></i></a>
								<a href="https://www.instagram.com/dermaplusclinic" target="blank" className="hovicon"><i className="icon-instagram"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4">
					<h3>Latest from Blog</h3>
					<div className="h-decor"></div>
					<div className="footer-post d-flex">
						<div className="footer-post-photo"><img src="https://media.gettyimages.com/id/1454143553/photo/happy-woman-receiving-a-beauty-treatment.jpg?s=612x612&w=0&k=20&c=1uOAu4JS_u786XdJVtOKgnNkcUHh97kN46rsm0EqkfI=" alt="" className="img-fluid" /></div>
						<div className="footer-post-text">
							<div className="footer-post-title"><a href="#">Top Skincare & Beauty Trends 2023</a></div>
							<p>January 15, 2023</p>
						</div>
					</div>
					<div className="footer-post d-flex">
						<div className="footer-post-photo"><img src="https://media.gettyimages.com/id/1277526053/photo/hair-transplant.jpg?s=612x612&w=0&k=20&c=WG5oQaOgrcu7VgAPrv_xzdMgtCc9e-DPz3jqsr21oTQ=" alt="" className="img-fluid" /></div>
						<div className="footer-post-text">
							<div className="footer-post-title"><a href="#">Everything About Hair Transplant</a></div>
							<p>December 10, 2022</p>
						</div>
					</div>
					<div className="footer-post d-flex">
						<div className="footer-post-photo"><img src="https://media.gettyimages.com/id/1266149331/photo/man-with-hair-loss-problem-receiving-injection-in-head.jpg?s=612x612&w=0&k=20&c=t9GruWrB3g2m9jYHE_F7VcLfHiJ1jwy39e60WO1K6UE=" alt="" className="img-fluid" /></div>
						<div className="footer-post-text">
							<div className="footer-post-title"><a href="#">PRP Therapy for Hair Fall</a></div>
							<p>November 5, 2022</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-4">
					<h3>Our Contacts</h3>
					<div className="h-decor"></div>
					<ul className="icn-list">
						<li><i className="icon-placeholder2"></i>PLOT NO 130-P, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122003
							<br />
							<a href="https://maps.app.goo.gl/dSvrkrr85cVJT4W39" target="_blank" className="btn btn-xs btn-gradient"><i className="icon-placeholder2"></i><span>Get directions on map</span><i className="icon-right-arrow"></i></a>
						</li>
						<li><i className="icon-telephone"></i><b><span className="phone"><span className="text-nowrap">+91 9910901473</span>, <span className="text-nowrap">0124 3163401</span></span></b>
							<br />(Sun-Sat: 10:00 AM - 8:00 PM)</li>
						<li><i className="icon-black-envelope"></i><a href="mailto:care@dermaplusclinicncr.com">care@dermaplusclinicncr.com</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer-bottom">
			<div className="container">
				<div className="row text-center text-md-left">
					<div className="col-sm">Copyright © 2025 <a href="#">DermaPlus Clinic</a><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
						<a href="#">Privacy Policy</a><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
						<a href="#">Terms of Use</a></div>
					<div className="col-sm-auto ml-auto"><span className="d-none d-sm-inline">For appointments&nbsp;&nbsp;&nbsp;</span><i className="icon-telephone"></i>&nbsp;&nbsp;<b>+91 9910901473</b></div>
				</div>
			</div>
		</div>
	</div>

	
	<a href="https://wa.me/+919910901473
" className="whatsapp-float" target="_blank">
    <i className="fa-brands fa-whatsapp"></i>
</a>


	
	<div className="backToTop js-backToTop">
		<i className="icon icon-up-arrow"></i>
	</div>

	<div className="modal modal-form fade" id="modalBookingForm">
		<div className="modal-dialog">
			<div className="modal-content">
				<button aria-label="Close" className="close" data-dismiss="modal">
					<i className="icon-error"></i>
				</button>
				<div className="modal-body">
					<div className="modal-form">
						<h3>Book Your Consultation</h3>
						<form className="mt-15" id="bookingForm" method="post" noValidate>
							<div className="successform">
								<p>Your appointment request was sent successfully! We'll contact you shortly.</p>
							</div>
							<div className="errorform">
								<p>Something went wrong. Please try again or call us directly.</p>
							</div>
							<div className="input-group">
								<span>
								<i className="icon-user"></i>
							</span>
								<input type="text" name="bookingname" className="form-control" autoComplete="off" placeholder="Your Full Name*" />
							</div>
							<div className="row row-xs-space mt-1">
								<div className="col-sm-6">
									<div className="input-group">
										<span>
											<i className="icon-email2"></i>
										</span>
										<input type="text" name="bookingemail" className="form-control" autoComplete="off" placeholder="Your Email*" />
									</div>
								</div>
								<div className="col-sm-6 mt-1 mt-sm-0">
									<div className="input-group">
										<span>
											<i className="icon-smartphone"></i>
										</span>
										<input type="text" name="bookingphone" className="form-control" autoComplete="off" placeholder="Your Phone*" />
									</div>
								</div>
							</div>
							<div className="row row-xs-space mt-1">
								<div className="col-sm-6">
									<div className="input-group">
										<span>
											<i className="icon-birthday"></i>
										</span>
										<input type="text" name="bookingage" className="form-control" autoComplete="off" placeholder="Your Age" />
									</div>
								</div>
							</div>
							<div className="selectWrapper input-group mt-1">
								<span>
									<i className="icon-hair"></i>
								</span>
								<select name="bookingservice" className="form-control">
									<option disabled="disabled">Select Service*</option>
									<option value="Hair Transplant">Hair Transplant</option>
									<option value="PRP Treatment">PRP Treatment</option>
									<option value="Laser Hair Removal">Laser Hair Removal</option>
									<option value="Fillers & Botox">Fillers & Botox</option>
									<option value="Anti Aging Treatment">Anti Aging Treatment</option>
									<option value="Chemical Peel">Chemical Peel</option>
									<option value="Skin Treatment">Skin Treatment (Pigmentation/Acne)</option>
									<option value="General Consultation">General Consultation</option>
								</select>
							</div>
							<div className="input-group flex-nowrap mt-1">
								<span>
									<i className="icon-calendar2"></i>
								</span>
								<div className="datepicker-wrap">
									<input name="bookingdate" type="text" className="form-control datetimepicker" placeholder="Preferred Date" readOnly />
								</div>
							</div>
							<div className="input-group flex-nowrap mt-1">
								<span>
									<i className="icon-clock"></i>
								</span>
								<div className="datepicker-wrap">
									<input name="bookingtime" type="text" className="form-control timepicker" placeholder="Preferred Time" />
								</div>
							</div>
							<textarea name="bookingmessage" className="form-control" placeholder="Your message or specific concerns (optional)"></textarea>
							<div className="text-right mt-2">
								<button type="submit" className="btn btn-sm btn-hover-fill">Book Appointment</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  );
}
