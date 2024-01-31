import Link from "next/link";
import Header from "@/components/header"; // the @ symbol refers to the root folder of the project

export default function Home() {
	return (
		<main>
			<Header />
			<p>🔥 Let&apos;s get started! 🔥</p>
			<p>
				<Link href="/about">About Us</Link>
			</p>
		</main>
	);
}

