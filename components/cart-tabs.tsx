import Link from "next/link";

export default function CartTabs() {
    return (
        <div>
            <ul>
                <li>
                    <Link href={`/cart/items`}>Cart Items</Link>
                </li>
                <li>
                    <Link href={`/cart/ordered`}>Ordered Items</Link>
                </li>
                <li>
                    <Link href={`/cart/received`}>Received Items</Link>
                </li>
            </ul>
        </div>
    )
}