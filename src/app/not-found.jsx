export default function NotFound() {
	return (
		<div className="max-w-3xl flex flex-col mx-auto size-full">

			{/* ========== MAIN CONTENT ========== */}
			<main id="content">
				<div className="text-center py-10 px-4 sm:px-6 lg:px-8">
					<h1 className="block text-7xl font-bold text-black sm:text-9xl dark:text-white">
						404
					</h1>
					<p className="mt-3 text-black dark:text-neutral-400">
						Oops, something went wrong.
					</p>
					<div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
						<a
							className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
							href="/"
						>
							<svg
								className="shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="m15 18-6-6 6-6" />
							</svg>
							Back to Home
						</a>
					</div>
				</div>
			</main>
			{/* ========== END MAIN CONTENT ========== */}

			{/* ========== FOOTER ========== */}
			<footer className="mt-auto text-center py-5">
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-sm text-gray-900 dark:text-neutral-500">
						© All Rights Reserved. 2025.
					</p>
				</div>
			</footer>
			{/* ========== END FOOTER ========== */}
		</div>
	);
}
