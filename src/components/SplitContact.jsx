"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const handleSubmit = async (e) => {
	const marketingConsent = e.get("marketingConsent");
	const formName = e.get("formName");
	const fName = e.get("firstName");
	const lName = e.get("lastName");
	const email = e.get("email");
	const message = e.get("text");

	const postObject = {
		formName: formName,
		firstName: fName,
		lastName: lName,
		email: email,
	};

	if (marketingConsent) {
		postObject.marketingConsent = marketingConsent;
	}

	if (message) {
		postObject.message = message;
	}

	axios
		.post("http://localhost:3000/api/form-submission", postObject)
		.then((res) => {
			console.log(res.data);
		})
		.catch((error) => {
			console.log(error);
			new Error(error);
		});
};

const SplitContact = () => {
	const [formVisibility, setFormVisibility] = useState(true);

	return (
		<div className="w-11/12 flex justify-center mb-60 pt-44  gap-x-20 mx-auto lg:flex-row text-primary-light flex-col place-items-center lg:place-items-start gap-40">
			<div className="flex-col flex gap-4 lg:gap-10 lg:w-5/12 w-10/12 blackOutline ">
				<h1 className="lg:text-6xl text-primary-light text-5xl mb-4">
					Let&apos;s Get in Touch!
				</h1>
				<p className="lg:text-2xl text-2xl text-white">
					Have a question?
					<br />
					<br />
					I&apos;d be happy to help! Please feel free to reach out to
					me using the contact form or one of the links below.
				</p>
				<div className="flex gap-6">
					<Link
						href={"tel:5402206532"}
						className="bg-white text-lg md:text-2xl rounded-lg py-1 md:py-2 hover:scale-105 font-semibold px-8"
					>
						<FontAwesomeIcon icon={faPhone} className="pr-2" />
						Call
					</Link>
					<Link
						href={"mailto:tristancollier777@gmail.com"}
						className="bg-white text-lg md:text-2xl rounded-lg py-1 md:py-2 hover:scale-105 font-semibold px-8"
					>
						<FontAwesomeIcon icon={faEnvelope} className="pr-2" />
						Email
					</Link>
				</div>
			</div>

			{formVisibility ? (
				<div className="lg:w-5/12 w-full  sm:w-9/12">
					<form
						className="flex flex-col gap-4 md:gap-6 place-items-center"
						name="Next Level Contact Page"
						action={handleSubmit}
						// onSubmit={() => setFormVisibility(false)}
					>
						<span className="flex gap-2 flex-col md:w-3/4 w-10/12">
							<input
								type="hidden"
								name="formName"
								value="Next Level Contact Page"
							/>
							<label
								htmlFor="firstName"
								className="text-base md:text-xl text-white "
							>
								First name:
							</label>
							<input
								type="text"
								name="firstName"
								required
								id="firstName"
								placeholder="John"
								className="md:text-xl border-2 rounded-lg p-2 border-black bg-white"
							/>
						</span>
						<span className="flex gap-2 flex-col md:w-3/4 w-10/12">
							<label
								htmlFor="lastName"
								className="text-base md:text-xl text-white"
							>
								Last Name:
							</label>
							<input
								type="text"
								placeholder="Doe"
								className="md:text-xl border-2 rounded-lg p-2 border-black bg-white"
								name="lastName"
								required
								id="lastName"
							/>
						</span>
						<span className="flex gap-2 flex-col w-10/12 md:w-3/4">
							<label
								htmlFor="email"
								className="text-base md:text-xl text-white"
							>
								Email:
							</label>
							<input
								className="md:text-xl border-2 rounded-lg p-2 border-black bg-white"
								type="email"
								required
								placeholder="example@email.com"
								id="email"
								name="email"
							/>
						</span>
						<span className="flex gap-2 flex-col w-10/12 md:w-3/4">
							<label
								htmlFor="text"
								className="text-base md:text-xl text-white"
							>
								How can we help you?
							</label>
							<textarea
								id="text"
								name="text"
								placeholder="You're text here..."
								className="ease-soft md:text-xl border-2 rounded-lg p-2 border-black h-40 text-wrap bg-white"
							></textarea>
						</span>
						<span className="flex gap-4 flex-row items-center md:w-3/4 w-10/12">
							<input
								type="checkbox"
								id="marketingConsent"
								name="marketingConsent"
								className="h-5 w-5"
							/>
							<label
								htmlFor="marketingConsent"
								className="text-base md:text-lg text-white text-nowrap"
							>
								Add me to your mailing list!
							</label>
						</span>
						<button
							type="submit"
							className=" border border-black  text-white bg-black rounded-lg w-10/12 md:w-3/4 md:text-2xl py-2 md:py-3"
						>
							Submit
						</button>
					</form>
				</div>
			) : (
				<div className="lg:w-5/12 text-white w-full sm:w-9/12 flex flex-col justify-center place-items-center gap-6 text-center">
					<p className="text-6xl">Thank you!</p>
					<p className="text-3xl">
						We will reach out to you shortly.
					</p>
				</div>
			)}
		</div>
	);
};

export default SplitContact;
