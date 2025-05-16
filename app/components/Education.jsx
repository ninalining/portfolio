"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "../../data/education";

export default function Education() {
	const [expanded, setExpanded] = useState(null);

	const toggleExpand = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<section className="mt-12">
			<p className="text-gray-700 dark:text-gray-300 mb-4">
				The <strong>Web Programming</strong> program at Blekinge Institute of
				Technology provides a solid foundation in software development with a
				specialization in web environments. Learn more on the{" "}
				<Link
					href="https://www.bth.se/utbildning/program-och-kurser/pagwg/?val=PAGWG25h"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[var(--accent)] underline hover:text-[var(--accent-hover)] dark:text-[var(--text)]"
				>
					official website
				</Link>
			</p>
			<div className="space-y-4">
				{courses.map((course, index) => (
					<div
						key={index}
						className="bg-[var(--background-highlight)] dark:bg-[var(--accent)] rounded-lg shadow-md dark:shadow-lg"
					>
						<button
							onClick={() => toggleExpand(index)}
							className="w-full text-left px-4 py-2 flex justify-between items-center text-gray-800 dark:text-gray-200"
						>
							<span className="font-semibold">{course.term}</span>
							<span className="text-gray-500 dark:text-gray-400">
								{expanded === index ? "▲" : "▼"}
							</span>
						</button>
						{expanded === index && (
							<ul className="px-4 py-2 space-y-2">
								{course.items.map((item, idx) => (
									<li
										key={idx}
										className="text-gray-700 dark:text-gray-300"
									>
										{item}
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
