
export const DarkBanner = () => {
    return (
        <>
            <div className="wrap_banner">
                <div className="col_copy">
                    <h1>Hi, I'm <span>Francisco J. Alfaro</span></h1>
                    <p>A Full-Stack Web Developer & Shopify Developer.<br></br> I like to build things for web and solving problems</p>
                </div>
                <div className="col_image">
                    <img src={require('../media/fran2.png')} alt="fran" />
                </div>
            </div>
        </>
    )
}