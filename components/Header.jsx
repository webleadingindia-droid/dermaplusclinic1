export default function Header() {
  return (
    <>





<header className="header">
		<div className="header-mobile-info">
			<div className="header-mobile-info-content js-info-content">
				<ul className="icn-list-sm">
					<li><i className="icon-placeholder2"></i>PLOT NO 130-P, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122003
					</li>
					<li><i className="icon-telephone"></i><span className="text-nowrap">+91 9910901473</span>, <span className="text-nowrap">+91 98765 43211</span></li>
					<li><i className="icon-black-envelope"></i><a href="mailto:care@dermaplusclinicncr.com">care@dermaplusclinicncr.com</a></li>
					<li><i className="icon-clock"></i>Mon-Sat: 10:00 - 19:00
						<br /> Sunday: By Appointment</li>
				</ul>
			</div>
		</div>
		<div className="header-mobile-top">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-3">
						<div className="header-mobile-info-toggle js-info-toggle"></div>
					</div>
					<div className="col-auto header-button-wrap ml-auto"><a href="#" className="btn" data-toggle="modal" data-target="#modalBookingForm"><i className="icon-right-arrow"></i>BOOK APPOINTMENT<i className="icon-right-arrow"></i></a></div>
				</div>
			</div>
		</div>
		<div className="header-topline d-none d-lg-flex">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-auto d-flex align-items-center">
						<div className="header-phone"><i className="icon-telephone"></i><a href="tel:+919910901473">+91 9910901473</a></div>
						<div className="header-info"><i className="icon-placeholder2"></i>PLOT NO 130-P, Islampur Colony, Sector 38, Gurugram, Haryana 122003</div>
						<div className="header-info"><i className="icon-black-envelope"></i><a href="mailto:care@dermaplusclinicncr.com">care@dermaplusclinicncr.com</a></div>
					</div>
					<div className="col-auto ml-auto d-flex align-items-center">
						<span className="header-social">
							<a href="#" className="hovicon"><i className="icon-facebook-logo-circle"></i></a>
							<a href="#" className="hovicon"><i className="icon-twitter-logo-circle"></i></a>
							<a href="#" className="hovicon"><i className="icon-instagram"></i></a>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div className="header-content">
			<div className="container">
				<div className="row align-items-lg-center">
					<button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNavDropdown">
						<span className="icon-menu"></span>
					</button>
					<div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
						<a href="/" className="header-logo">
						<img src="/images/logo.png" className="img-fluid" alt="" />	
						</a>
					</div>
					<div className="col-lg ml-auto header-nav-wrap">
						<div className="header-nav js-header-nav">
							<nav className="navbar navbar-expand-lg btco-hover-menu">
								<div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
									<ul className="navbar-nav">
										<li className="nav-item">
											<a className="nav-link" href="/about">About Us</a>
										</li>
										<li className="nav-item">
											<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
											<ul className="dropdown-menu">
												<li><a className="dropdown-item" href="/services">All Services</a></li>
												<li><a className="dropdown-item" href="#">Hair Transplant</a></li>
												<li><a className="dropdown-item" href="#">PRP Treatment</a></li>
												<li><a className="dropdown-item" href="#">Laser Hair Removal</a></li>
												<li><a className="dropdown-item" href="#">Fillers & Botox</a></li>
												<li><a className="dropdown-item" href="#">Anti Aging</a></li>
												<li><a className="dropdown-item" href="#">Chemical Peel</a></li>
											</ul>
										</li>
										<li className="nav-item">
											<a href="/gallery" className="nav-link dropdown-toggle" data-toggle="dropdown">Gallery</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="/testimonials">Testimonials</a>
										</li>
										<li className="nav-item dropdown">
											<a href="/blog" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
											
										</li>
										<li className="nav-item">
											<a className="nav-link" href="/contact">Contact Us</a>
										</li>
                                    </ul>
								</div>
							</nav>
						</div>

						<div className="header-cart cart-toggler">
							<button className="btn btn-sm d-none d-lg-block" data-toggle="modal" data-target="#modalBookingForm"><span>Book Consultation</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	

	
    </>
  );
}
