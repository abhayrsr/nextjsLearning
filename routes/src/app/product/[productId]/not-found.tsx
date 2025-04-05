"use client";
import { usePathname } from "next/navigation";

export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[1];
    return (
        <div>
            <h1>Product-Id {productId} not found</h1>
        </div>
    )
}