import type { Metadata } from "next";
import { Strichpunkt_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Globle/Footer/Footer";
import Header from "@/components/Globle/Header/Header";

const strichpunktSans = Strichpunkt_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-strichpunkt",
    display: "swap",
    adjustFontFallback: false,
});

export const metadata: Metadata = {
	title: "RarePixels Design | Thinking of an Idea is Easy but Make them Happen is Rare",
	description: "Unleash the full potential of your brand with RarePixels Design LLP, a creative powerhouse offering unparalleled UI/UX design, web and mobile app development, and branding solutions. Our skilled team of digital enthusiasts has consistently elevated businesses of all sizes. With an unmatched ability to envision and construct engaging user experiences, we bring your digital vision to life confidently, propelling your brand to new heights.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${strichpunktSans.variable} h-full antialiased`} >
			<body className="min-h-full flex flex-col">
				<Header />

				<main>
					{children}
				</main>
				
				<Footer />
			</body>
		</html>
	);
}
