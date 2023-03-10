import React from 'react'
import {AiFillStar, AiOutlineHeart, AiOutlineLeft} from "react-icons/ai"
import {BsBagDashFill} from "react-icons/bs"
const Home = () => {
  return (
    <>
        <div className="wrapper">
            <div className="container">
                <div className="flex">
                    <div className="image">
                        <img src="images/shose.jpg" alt="" />
                        <AiOutlineHeart />
                        <div className="left">
                            <AiOutlineLeft />
                            <span>next in</span>
                        </div>
                    </div>
                    <div className="details">
                        <h1>Heavy Weight Shoes</h1>
                        <div className="more-details">
                            <span className='price'>$120.00</span>
                            <span className='star'><AiFillStar /> 4.9 .</span>
                            <span className='reviews'>123.reviews .</span>
                            <span className='next'>   <AiOutlineLeft /> next in</span>
                        </div>
                    </div>
                    <div className="colors">
                        <h2>Colors</h2>
                        <span className='widt'></span>
                        <span className='red'></span>
                        <span className='black'></span>
                        <span className='green'></span>
                        <span className='light'></span>
                    </div>
                    <div className="size">
                        <div className="flex">
                        <h1>Size:<span>xs</span></h1>
                        <span>See sizing chart</span>
                        </div>
                        <span>xs</span>
                        <span>s</span>
                        <span>m</span>
                        <span>l</span>
                        <span>xl</span>
                        <span className='user-none'>2xl</span>
                        <span className='user-none'>3xl</span>
                    </div>
                    <div className="btns">
                        <button className='munis'>-</button>
                        <span className='count'>1</span>
                        <button className='plus'>+</button>
                        <button className='cart'> <BsBagDashFill /> add to cart</button>
                    </div>
                    <div className="desc">
                        <h1>Description</h1>
                        <span>-</span>
                    </div>
                    <div className="lorem">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt voluptatum quia et dignissimos eius aliquid qui, earum quod quidem esse!</p>
                    </div>
                    <div className="cars">
                        <h1>Fabric + Core</h1>
                        <span>-</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home