import React from 'react';
import Link from 'next/link';

const Menu = () => {
    return (
        <div>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/products/macbook"}>Single Product</Link>
        </div>
    );
};

export default Menu;