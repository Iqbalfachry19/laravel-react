import React from "react";

import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";

export default function HeaderLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Header />
            {children}
        </>
    );
}
