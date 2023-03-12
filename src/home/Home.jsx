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
                        <div className="left">
                            <AiOutlineLeft />
                            <span className='next'>next in</span>
                        </div>
                        <div className="right">
                        <AiOutlineHeart />
                        </div>
                    </div>
                    <div className="details">
                        <h1>Heavy Weight Shoes</h1>
                        <div className="more-details">
                            <span className='price'>$120.00</span>
                            <span className='star'><AiFillStar className='yallow'/> 4.9 </span>
                            <span className='reviews'>123.reviews .</span>
                            <span className='next'>   <AiOutlineLeft /> next in</span>
                        </div>
                    <div className="colors">
                        <h2>Colors:</h2>
                        <div className="flex-colors">
                        <span className='widt'></span>
                        <span className='red'></span>
                        <span className='black'></span>
                        <span className='green'></span>
                        <span className='nove'></span>
                        </div>
                    </div>
                    <div className="size">
                        <div className="flex">
                        <h1>Size:<span>xs</span></h1>
                        <span className='link'>See sizing chart</span>
                        </div>
                        <div className="sizes">
                            <span className='siz'>xs</span>
                            <span className='siz'>s</span>
                            <span className='siz'>m</span>
                            <span className='siz'>l</span>
                            <span className='siz'>xl</span>
                            <span className='user-none siz'>2xl</span>
                            <span className='user-none siz'>3xl</span>
                        </div>
                    </div>
                    <div className="btns">
                        <button className='munis'>-</button>
                        <span className='count'>1</span>
                        <button className='plus'>+</button>
                        <button className='cart'> <BsBagDashFill className='icon-cart'/> Add to cart</button>
                    </div>
                    <div className="desc">
                        <span>Description</span>
                        <span>-</span>
                    </div>
                    <div className="lorem">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt voluptatum quia et dignissimos eius aliquid qui, earum quod quidem esse!</p>
                    </div>
                    <div className="cars">
                        <span>Fabric + Core</span>
                        <span>-</span>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home