import React, { Suspense, useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderLayout from "@/Layouts/HeaderLayout";
export default function Home(props) {
    const [text, setText] = useState(Math.random());

    useEffect(() => {
        const myInterval = setInterval(() => setText(Math.random()), 1000);
        return () => {
            clearInterval(myInterval);
        };
    }, []);
    return (
        <HeaderLayout title={props.title}>
            <div className="flex flex-col max-w-4xl mt-10 mx-auto">
                <Suspense fallback={"loading"}>
                    <p>Selamat Datang di Donaco</p>
                </Suspense>
                <Suspense fallback={"loading"}>{text}</Suspense>
            </div>
        </HeaderLayout>
    );
}
