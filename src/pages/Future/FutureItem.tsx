interface typeFutureItem {
    image: any;
    text: string;
}

export default function FutureItem({image, text = ""}:typeFutureItem) {
    return (
        <>
            <div style={{ width: "100%" }}>
                <div className="future_container" style={{ width: "100%", height: "100%" }}>
                    <img src={image} alt="" height={300} width={'100%'} className="future_img" />
                    <div className="future_overlay">
                        <div className="future_text">{text}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
