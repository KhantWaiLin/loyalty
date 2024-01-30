function CouponItem({name}) {
    return (
        <li className="flex items-center justify-between px-3 py-2 mb-3 border-2 border-black rounded-md">
            <span>{name}</span>
            <span>
                <button className="px-2 border-2 rounded-full">Use Code</button>
            </span>
        </li>
    );
}

export default CouponItem;