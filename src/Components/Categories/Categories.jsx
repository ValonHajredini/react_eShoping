import React from 'react';
import './Categories.css';
import Accordion from '../UI/Accordion/Accordion';
const Categories = () => {
    return (
        <div className={'list-my-categories'}>
            <div className="section-title">
                <div className={'sectionItem line-section'}> </div>
                <div className={'sectionItem title'}>CATEGORY</div>
                <div className={'sectionItem line-section'}> </div>
            </div>
            <div className={'categories-accordion'}>
                <Accordion />
            </div>
            <br/>
            <div className="section-title">
                <div className={'sectionItem line-section'}> </div>
                <div className={'sectionItem title'}>BRANDS</div>
                <div className={'sectionItem line-section'}> </div>
            </div>
            <br/>
            <div className="section-title">
                <div className={'sectionItem line-section'}> </div>
                <div className={'sectionItem title'}>PRICE RANGE</div>
                <div className={'sectionItem line-section'}> </div>
            </div>

        </div>
    )
};
export default Categories;