import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dashboard",
    description: "Generated by create next app",
};

export default function SignupLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>
    );
}
