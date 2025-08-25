import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export type StartupCardType = {
	_createdAt: Date;
	views: number;
	auther: { _id: number , name : string };
	_id: number;
	description: string;
	image: string;
	category: string;
	title: string;
};

const Home = async ({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) => {
	const query = (await searchParams).query;
	const posts = [
		{
			_createdAt: Date.now(),
			views: 55,
			auther: { _id: 1, name : "suraj" },
			_id: 1,
			description: "This is a description",
			image: "https://images.pexels.com/photos/33520083/pexels-photo-33520083.jpeg",
			category: "Cat",
			title: "I love cat",
		},
	];
	return (
		<>
			<section className="pink_container pattern">
				<h1 className="heading">
					Pitch Your Startup, <br /> Connect With Entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Vote on Piches, and Get Noticed in Virtual
				</p>
				<SearchForm query={query} />
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : "All Startups"}
				</p>
				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No Startups Found</p>
					)}
				</ul>
			</section>
		</>
	);
};

export default Home;
