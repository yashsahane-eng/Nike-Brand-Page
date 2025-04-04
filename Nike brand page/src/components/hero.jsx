const HeroSection = () => {
    return (
        <main className="hero-container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button className="shop-btn">Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>
                <div className="available-platform">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="amazon-1.png" alt="amazon-logo" />
                        <img src="flipkart-1.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./shoe_image.png" alt="Nike Shoe" />
            </div>
        </main>
    );
};

export default HeroSection;
