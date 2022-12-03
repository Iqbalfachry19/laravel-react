import React, { Suspense, useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import HeaderLayout from "@/Layouts/HeaderLayout";
export default function Donasi(props) {
    const [count, setCount] = useState("hello");
    return (
        <HeaderLayout title={props.title}>
            <div className="flex flex-col max-w-4xl mt-10 mx-auto">
                <Suspense fallback={"loading"}>
                    <p>Rekomendasi Donasi</p>
                </Suspense>
                <Suspense fallback={"loading"}>{count}</Suspense>
                {typeof count === "number" ? (
                    <button onClick={() => setCount(count + 1)}>
                        klik disini
                    </button>
                ) : (
                    <button onClick={() => setCount(0)}>klik disini</button>
                )}
            </div>
        </HeaderLayout>
    );
}
