import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [
	{
		title: "Mann Mera",
		artist: "Gajendra Verma; ",
        imageUrl: "/cover-images/7.jpg",
    	audioUrl: "/songs/7.mp3",
		duration: 192, // 0:46
	},
	{
		title: "Naqaab",
				artist: "Karun",
				imageUrl: "/cover-images/5.jpg",
				audioUrl: "/songs/5.mp3",
		duration: 180, // 0:41
	},
	{
		title: "Laila",
				artist: "Karun",
				imageUrl: "/cover-images/1.jpg",
				audioUrl: "/songs/1.mp3",
		duration: 181.8, // 0:24
	},
	{
		title: "Anjaane",
				artist: "Karun",
				imageUrl: "/cover-images/2.jpg",
				audioUrl: "/songs/2.mp3",
		duration: 255.6, // 0:24
	},
	{
		title: "Classmate",
				artist: "Karun",
				imageUrl: "/cover-images/4.jpg",
				audioUrl: "/songs/4.mp3",
		duration: 197.4, // 0:36
	},
	{
		title: "Ruhaani",
				artist: "Karun",
				imageUrl: "/cover-images/3.jpg",
				audioUrl: "/songs/3.mp3",
		duration: 146.4, // 0:40
	},
	{
		title: "Jaana",
				artist: "Karun",
				imageUrl: "/cover-images/6.jpg",
				audioUrl: "/songs/6.mp3",
		duration: 199.2, // 0:39
	},
	{
		title: "Dil To Bachcha Hai",
				artist: "Rahat Fateh Ali Khan",
				imageUrl: "/cover-images/8.jpg",
				audioUrl: "/songs/8.mp3",
		duration: 320.4, // 0:28
	},
	{
		title: "Samjho Na",
				artist: "Aditya Rikhari",
				imageUrl: "/cover-images/9.jpg",
				audioUrl: "/songs/9.mp3",
		duration: 151.2, // 0:28
	},
	{
		title: "Obsessed",
				artist: "Riar Saab",
				imageUrl: "/cover-images/10.jpg",
				audioUrl: "/songs/10.mp3",
		duration: 186, // 0:30
	},
	{
		title: "Manjha",
				artist: "Vishal Mishra",
				imageUrl: "/cover-images/11.jpg",
				audioUrl: "/songs/11.mp3",
		duration: 186.6, // 0:29
	},
	{
		title: "Teri Deewani",
				artist: "Kailash Kher",
				imageUrl: "/cover-images/12.jpg",
				audioUrl: "/songs/12.mp3",
		duration: 313.8, // 0:17
	},
	{
		title: "Ghora 2",
				artist: "Benny Dhaliwal",
				imageUrl: "/cover-images/13.jpg",
				audioUrl: "/songs/13.mp3",
		duration: 193.2, // 0:39
	},
	{
		title: "Are Dwarpalo",
				artist: "Ram Kumar Lakkha",
				imageUrl: "/cover-images/14.jpg",
				audioUrl: "/songs/14.mp3",
		duration: 435, // 0:27
	},
];

const seedSongs = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		// Clear existing songs
		await Song.deleteMany({});

		// Insert new songs
		await Song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();