import React from 'react';
import s1 from '../../../assets/img/slider/girl1.jpg'
import s2 from '../../../assets/img/slider/girl2.jpg'
import s3 from '../../../assets/img/slider/girl3.jpg'
import Themebutton from '../ThemeButton/ThemeButton';
import './Carousel.css';
const carousel = (props) => {
    return (
        <div className={'container'}>
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"> </li>
                    <li data-target="#demo" data-slide-to="1"> </li>
                    <li data-target="#demo" data-slide-to="2"> </li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-6">
                                <div className={'slide-text-left'}>
                                    <div className="item-columnt-flex">
                                        <h3>LIGE Brand Men Watches Automatic Mechanical Watch</h3>
                                        <p>LIGE Brand Men Watches Automatic Mechanical Watch Tourbillon Sport Clock Leather Casual Business Retro Wristwatch Relojes Hombre</p>
                                        <h1>$60</h1>
                                        {/*<button className={'btn '}>Shop now</button>*/}
                                        <Themebutton text={'Shop Now'} size={22}/>
                                    </div>
                                </div>

                            </div>
                            <div className="col-6">
                                <img src={s1} alt="Los Angeles" />
                            </div>
                        </div>


                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6">
                                <div className={'slide-text-left'}>
                                    <div className="item-columnt-flex">
                                        <h3>YOYA PLUS baby stroller delivery free ultra light folding can sit or lie high </h3>
                                        <p>YOYA PLUS baby stroller delivery free ultra light folding can sit or lie high landscape suitable 4 seasons high demand</p>
                                        <h1>$180</h1>
                                        <Themebutton text={'Shop Now'} size={22}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src={s2} alt="Los Angeles" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-6">
                                <div className={'slide-text-left'}>
                                    <div className="item-columnt-flex">
                                        <h3>2in1 Dual-head Fruit Ball Carving Knife Kiwi </h3>
                                        <p>2in1 Dual-head Fruit Ball Carving Knife Kiwi Fruit Waterlemon Scoop Melon Digger Fruit Jar Mashed Potato Baller Ice Cream Spoon</p>
                                        <h1>$5</h1>
                                        <Themebutton text={'Shop Now'} size={22}/>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6">
                                <img src={s3} alt="Los Angeles" />
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"> </span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"> </span>
                </a>
            </div>
        </div>

    )
};
export default carousel;