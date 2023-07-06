import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
    title: "SwiftDrive Rentals",
    description:
        "Welcome to SwiftDrive Rentals, the premier destination for convenient and reliable car rentals. Our extensive fleet of vehicles ensures that you can find the perfect ride for your next adventure or business trip. With our user-friendly interface and hassle-free booking process, reserving a car has never been easier. Whether you need a compact car for city exploration or an SUV for off-road escapades, we have the ideal vehicle to suit your needs. Experience exceptional customer service, competitive rates, and flexible rental options when you choose SwiftDrive Rentals. Start your journey today and discover why we are the top choice for car rentals.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
