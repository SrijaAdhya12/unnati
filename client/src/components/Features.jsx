import React from 'react'

const Features = () => {
    return (
		<section className="mx-[400px] pt-[120px] pb-[100px]">
			<div className="font-roboto text-4xl font-bold pb-16">Features</div>
			<div className="flex space-x-16">
				<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resources: blogs, articles & CheatSheets</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Get insightful blogs, articles and cheatsheets catering women's personal growth& career development</p>
					<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Know more
						<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
						</svg>
					</a>
				</div>

				<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job Openings & Interships</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Updates to join tech startups, ranging from software engineering roles to product management.</p>
					<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Read more
						<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
						</svg>
					</a>
				</div>

				<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<a href="#">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Attend Events: Meetups &Hackathons</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Network with industry professionals, learn about the latest trends, and collaborate on innovative projects</p>
					<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Read more
						<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Features