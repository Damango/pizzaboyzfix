import React, { useEffect } from "react";
import "./PizzaBoyz.css";
import { useState } from "react";
import data from "../../data/menu.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { animated, useSpring } from "react-spring";

const PizzaBoyz = () => {
	const [lineStyle, setLineStyle] = useState("menu-line-close");
	const [mobileNavBar, setMobileNavBar] = useState("mobile-nav-bar-off");
	const [mobileNavItems, setMobileNavItems] = useState("nav-link-mobile-off");
	const [mobileSocialItems, setMobileSocialItems] = useState(
		"mobile-social-media-off"
	);

	function dropDownMobile() {
		if (mobileNavBar === "mobile-nav-bar-off") {
			setMobileNavBar("mobile-nav-bar-on");
			setMobileNavItems("nav-link-mobile-on");
			setMobileSocialItems("mobile-social-media-on");
		} else if (mobileNavBar === "mobile-nav-bar-on") {
			setMobileNavBar("mobile-nav-bar-off");
			setMobileNavItems("nav-link-mobile-off");
			setMobileSocialItems("mobile-social-media-off");
		}
	}

	function closeDropDown() {
		if (mobileNavBar === "mobile-nav-bar-on") {
			setMobileNavBar("mobile-nav-bar-off");
			setMobileNavItems("nav-link-mobile-off");
			setMobileSocialItems("mobile-social-media-off");
		}
	}

	function openFacebook() {
		window.open("https://www.facebook.com/pizzaboyz.palatka");
	}

	function openInstagram() {
		window.open("https://www.instagram.com/pizzaboyzpalatka/?hl=en");
	}

	window.addEventListener("scroll", function (event) {
		var scroll = this.scrollY;
		if (scroll > 100) {
			setLineStyle("menu-line-open");
		}
	});

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div className="pizza-boys-web-container" id="theTop">
			<i className="fas fa-bars" onClick={dropDownMobile}></i>
			<div className={mobileNavBar}>
				<div className="mobile-nav-links-container">
					<Link
						onClick={dropDownMobile}
						className={mobileNavItems}
						activeClass="active"
						to="theMenu"
						spy={true}
						smooth={true}
						duration={300}
					>
						MENU
					</Link>
					<p className={mobileNavItems}>
						CONTACT<span>- Coming Soon</span>
					</p>
					<p className={mobileNavItems}>
						GALLERY<span>- Coming Soon</span>
					</p>
					<p className={mobileNavItems}>
						MORE INFO<span>- Coming Soon</span>
					</p>
					<div className={mobileSocialItems}>
						<i className="fab fa-instagram" onClick={openInstagram}></i>
						<i className="fab fa-facebook" onClick={openFacebook}></i>
					</div>
				</div>
			</div>
			<div className="nav-bar-container">
				<div className="nav-bar-flare">
					<div className="nav-line"></div>
					<div className="nav-circle"></div>
					<div className="nav-line"></div>
				</div>
				<div className="nav-links-container">
					<Link
						onClick={dropDownMobile}
						className="nav-link"
						activeClass="active"
						to="theMenu"
						spy={true}
						smooth={true}
						duration={300}
					>
						MENU
					</Link>
					<p className="nav-link">
						CONTACT<span>- Coming Soon -</span>
					</p>
					<p className="nav-link">
						GALLERY<span>- Coming Soon -</span>
					</p>
					<p className="nav-link">
						MORE <span>- Coming Soon -</span>
					</p>
				</div>
				<div className="social-media-container">
					<i className="fab fa-instagram" onClick={openInstagram}></i>
					<i className="fab fa-facebook" onClick={openFacebook}></i>
				</div>
				<div className="nav-bar-flare">
					<div className="nav-line"></div>
					<div className="nav-circle"></div>
					<div className="nav-line"></div>
				</div>
			</div>
			<div className="right-side" onClick={closeDropDown}>
				<Link
					className="to-top-button"
					onClick={closeDropDown}
					activeClass="active"
					to="theTop"
					spy={true}
					smooth={true}
					duration={300}
				>
					<i className="fas fa-sort-up"></i>
				</Link>
				<div className="jumbotron-container">
					<div className="logo"></div>
					<div className="jumbo-info-container">
						<p>
							919 St. Johns Ave, Palatka, FL 32177
							<br></br>Tues - Thur 11:00 AM - 8:30 PM
							<br></br>Fri 11:00 AM - 9:30 PM
							<br></br>Sat 12:00 PM - 9:30 PM
						</p>
						<p> Closed Sunday & Monday</p>

						<a href="tel: 386-325-9977">(386) 325-9977</a>
						<p>
							FREE WIFI <i class="fas fa-wifi"></i>
						</p>
					</div>
					<Link
						className="menu-button"
						activeClass="active"
						to="theMenu"
						spy={true}
						smooth={true}
						duration={300}
					>
						MENU
					</Link>
				</div>
				<div className="menu-container" id="theMenu">
					<div className="pizza-container menu-section">
						<div className="menu-title">
							PIZZA
							<div className="menu-note">
								- All Pizzas are 16" and made with 100% mozzarella. Extra
								ingredients are $2.75 per pie. Ask for thin crust. -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.pizza.map((pizza) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{pizza.name}</div>
									{Array.isArray(pizza.price) ? (
										<div className="multi-price">
											{pizza.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 15 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{pizza.price}</div>
									)}
									<div className="item-toppings">{pizza.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="pizza-container menu-section">
						<div className="menu-title">
							PIZZA BY THE SLICE
							<div className="menu-note">
								- No substiutions or exchanges for pizza by the slice. -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.byTheSlice.map((pizza) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name ">{pizza.name}</div>
									<div className="item-price">{pizza.price}</div>
									<div className="item-toppings">{pizza.toppings}</div>
								</div>
							))}
						</div>
					</div>

					<div className="pizza-container menu-section">
						<div className="menu-title">
							COMBOS
							<div className="menu-note">
								- Served Daily until 7:30 p.m. Choose from the Big Hit, Bambino,
								Capone Squeeze or Hymie Weiss. All combos come with a drink
								(soda or tea). -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.combos.map((pizza) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{pizza.name}</div>
									<div className="item-price">{pizza.price}</div>
									<div className="item-toppings">{pizza.toppings}</div>
								</div>
							))}
						</div>
					</div>

					<div className="appetizers-container menu-section">
						<div className="menu-title">
							APPETIZERS
							<div className="menu-note">- Extra ingredients are $2.50 -</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.appetizers.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>

					<div className="wings-container menu-section">
						<div className="menu-title">
							WINGS
							<div className="menu-note">
								- Baked un-breaded chicken wings. Served with choice of one
								sauce/dressing for 6 wings; and, two sauces/dressings for 12
								wings. Extra dressings are $0.85. Choose from Naked, BBQ, Hot,
								Teriyaki, Honey Hot, Garlic/Parmesan, Celery Salt, Lemon Pepper
								or Mango Habanero. -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.wings.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>

					<div className="calzones-container menu-section">
						<div className="menu-title">
							CALZONES & STROMBOLIS
							<div className="menu-note">
								- Calzones come with Mozzarella and Ricotta Cheese. Stromboli
								comes with Mozzarella Cheese. Whole Calzones and Strombolis are
								about the size of a pizza folded in half. -
							</div>
						</div>
						<div className={lineStyle}></div>
						<div className="menu-items-container calzone-menu">
							{data.menu.calzones
								.slice(0)
								.reverse()
								.map((pizza) => (
									<div
										className="menu-item"
										data-aos="fade-down"
										data-aos-once="true"
										data-aos-offset="-20"
									>
										<div className="item-name">{pizza.name}</div>
										<div className="multi-price">
											{pizza.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 15 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>

										<div className="item-toppings">{pizza.toppings}</div>
									</div>
								))}
						</div>
					</div>

					<div className="cold-subs-container menu-section">
						<div className="menu-title">
							COLD SUBS
							<div className="menu-note">
								- All subs (Hot and Cold) are served with a pickle spear and
								choice of chips (or exchange for fries for $2.00) Mayonnaise,
								mustard and ketchup served on the side. Extra meat is $2.75.
								Charges may apply for substiutions or extras. -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.coldSubs.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="hot-subs-container menu-section">
						<div className="menu-title">HOT SUBS</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.subs.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="dinners-container menu-section">
						<div className="menu-title">
							DINNERS
							<div className="menu-note">
								- All dinners served with slices of garlic bread(except Chicken
								Basket). Make it cheesey, garlic bread, for an extra $1.25. Add
								a side salad for $4.29 -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.dinners.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 15 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="salads-container menu-section">
						<div className="menu-title">
							SALADS
							<div className="menu-note">
								- All salads are served with crackers and choice of dressing(1
								for small and 2 for large). Dressing choices: Ranch, Spicey
								Ranch, Blue Cheese, Caesar, Balsamic Vinaigrette, Italian,
								Creamy Italian, Red Wine vinegar and Oilve Oil, French, or Honey
								Mustard, Extra Dresing are $0.85 each. -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.salads.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="specials-container menu-section">
						<div className="menu-title">
							SPECIALS
							<div className="menu-note">
								- Add a side salad to any daily special for $4.29 -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.specials.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 10 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="kids-container menu-section">
						<div className="menu-title">
							FOR KIDS
							<div className="menu-note">
								- FOR CHILDREN 12 AND UNDER NO EXCEPTIONS, Ketchup Mayonnaise
								and mustard served on the side. Additional sauces / dressings
								are $0.85 each. -
							</div>
							<div className="menu-note">
								All Combos for Kids come with a kid's drink and applesauce
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.kidz.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
					<div className="drinks-container menu-section">
						<div className="menu-title">
							DRINKS
							<div className="menu-note">
								- Ask to see our Mixed Drink Menu and Prices. -
							</div>
						</div>

						<div className={lineStyle}></div>
						<div className="menu-items-container pizza-menu">
							{data.menu.drinks.map((item) => (
								<div
									className="menu-item"
									data-aos="fade-down"
									data-aos-once="true"
									data-aos-offset="0"
								>
									<div className="item-name">{item.name}</div>
									{Array.isArray(item.price) ? (
										<div className="multi-price">
											{item.price.map((price) => (
												<div
													className={
														"item-price-multi " +
														(price.length > 20 ? "multi-long" : "")
													}
												>
													{price}
												</div>
											))}
										</div>
									) : (
										<div className="item-price">{item.price}</div>
									)}

									<div className="item-toppings">{item.toppings}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PizzaBoyz;
