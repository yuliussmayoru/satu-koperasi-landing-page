import React from "react";
import { Footer, NavBar} from "sections";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            <NavBar />
            <main>
                {children}
            </main>
            <Footer/>
        </body>
    );
}
