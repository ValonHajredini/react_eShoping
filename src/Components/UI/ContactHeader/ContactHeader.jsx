import React from 'react';
import './ContactHeader.css';
import  FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactHeader = (props) => {
    return (
        <div className="HeaderTop_ContactHeader">
            <div className={'container'}>
                <div className={'flex_container'}>
                    <div className={'item'}>
                        <ul className={'List_HeaderTop_ContactHeader'}>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='phone'
                                    /> <span>+383 49 504 881</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='envelope'
                                    /> <span>info@shumlire.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={'item'}>
                        <ul className={'List_HeaderTop_ContactHeader'}>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='facebook-f'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        name='twitter'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='linkedin'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='dribbble'
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='google-plus'
                                    />
                                </a>
                            </li>

                        </ul>
                    </div>


                </div>


            </div>
        </div>

    );
};
export default ContactHeader;