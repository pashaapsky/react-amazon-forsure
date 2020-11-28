import React from 'react';
import Product from "./Product";
import '../scss/products.scss'

function Products() {
    return (
        <div className="products ">
            <div className="products__container fixed-container">
                <div className="products__row two-items">
                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://images-na.ssl-images-amazon.com/images/I/71thf1SYnGL._AC_SL1500_.jpg"
                        description="Apple MacBook Air (13-inch Retina Display, 8GB RAM, 256GB SSD Storage) - Gold (Previous Model)"
                        price="1,499.00"
                        rating={5}
                    />

                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
                        description="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray"
                        price="2,301.61"
                        rating={5}
                    />
                </div>

                <div className="products__row three-items">
                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://m.media-amazon.com/images/I/71DVgBTdyLL._FMwebp__.jpg"
                        description="New Apple iPhone 12 Pro (128GB, Pacific Blue) [Locked] + Carrier Subscription"
                        price="1,235.00"
                        rating={5}
                    />

                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://m.media-amazon.com/images/I/71Sa8+9H3xL._FMwebp__.jpg"
                        description="New Apple iPhone 12 mini (64GB, (PRODUCT) RED) [Locked] + Carrier Subscription"
                        price="950.00"
                        rating={4}
                    />

                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://m.media-amazon.com/images/I/81UhYiZH98L._FMwebp__.jpg"
                        description="New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription"
                        price="541.43"
                        rating={4}
                    />
                </div>

                <div className="products__row three-items">
                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://m.media-amazon.com/images/I/71rejwthFaL._AC_SL1500_.jpg"
                        description="Apple Watch Series 5 (GPS + Cellular, 44MM) - Space Gray Aluminum Case with Black Sport Band (Renewed)"
                        price="379.99"
                        rating={4}
                    />

                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://images-na.ssl-images-amazon.com/images/I/31dmyJLALHL._AC_.jpg"
                        description="Bluetooth 5.0 Wireless Earbuds Headsets Bluetooth Headphones 【24Hrs Charging Case】 3D Stereo IPX5 Waterproof Pop-ups Auto Pairing Fast Charging for Earphone iPhone Android Apple Airpods"
                        price="19.99"
                        rating={5}
                    />

                    <Product
                        id={Math.floor(Math.random() * 10 ** 5)}
                        src="https://images-na.ssl-images-amazon.com/images/I/71C1O%2BkpbCL._AC_SL1500_.jpg"
                        description="4 in 1 Wireless Charging Station, Saferell 2020 Upgraded Qi-Certified Fast Charging Dock Stand for Apple Watch Series 6/SE/5/4/3/2, AirPods & Pencil, Compatible with iPhone11 Pro/XS/XR/8/Samsung"
                        price="27.99"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;
