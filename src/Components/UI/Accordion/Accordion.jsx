import React from 'react';
import './Accordion.css';

const Accordion = (props) => {

    return (
        <div className="accordion" id="accordionExample">
            <p className="collapsed category-title" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                SPORTSWEAR <span className={'accordion-indicator'}> <i className={'fa fa-plus'}> </i></span>
            </p>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <ul className={'sub-acordion-menu'}>
                    <li><a href="#">NIKE</a></li>
                    <li><a href="#">UNDER ARMOUR</a></li>
                    <li><a href="#">ADIDAS</a></li>
                    <li><a href="#">PUMA</a></li>
                    <li><a href="#">ASICS</a></li>
                </ul>
            </div>
            <p className="collapsed category-title" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                MENS <span className={'accordion-indicator'}> <i className={'fa fa-plus'}> </i></span>
            </p>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <ul className={'sub-acordion-menu'}>
                    <li><a href="#">FENDI</a></li>
                    <li><a href="#">GUESS</a></li>
                    <li><a href="#">VALENTINO</a></li>
                    <li><a href="#">DIOR</a></li>
                    <li><a href="#">VERSACE</a></li>
                    <li><a href="#">ARMANI</a></li>
                    <li><a href="#">PRADA</a></li>
                    <li><a href="#">DOLCE AND GABBANA</a></li>
                    <li><a href="#">CHANEL</a></li>
                    <li><a href="#">GUCCI</a></li>
                </ul>
            </div>
            <p className="collapsed category-title" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                WOMENS <span className={'accordion-indicator'}> <i className={'fa fa-plus'}> </i></span>
            </p>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <ul className={'sub-acordion-menu'}>
                    <li><a href="#">FENDI</a></li>
                    <li><a href="#">GUESS</a></li>
                    <li><a href="#">VALENTINO</a></li>
                    <li><a href="#">DIOR</a></li>
                    <li><a href="#">VERSACE</a></li>
                </ul>
            </div>
            <p className="collapsed category-title" >
                KIDS
            </p>
            <p className="collapsed category-title" >
                FASHION
            </p>
            <p className="collapsed category-title" >
                HOUSEHOLDS
            </p>
            <p className="collapsed category-title" >
                INTERIORS
            </p>
            <p className="collapsed category-title" >
                CLOTHING
            </p>
            <p className="collapsed category-title" >
                BAGS
            </p>
            <p className="collapsed category-title" >
                SHOES
            </p>

        </div>
    )
};
export default Accordion;