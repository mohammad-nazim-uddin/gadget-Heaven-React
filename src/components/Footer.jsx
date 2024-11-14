import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className='text-center mx-16 my-16 '>
                <p className="font-bold text-4xl p-5">
                    Gadget Heaven
                </p>
                <p className='text-xl '>Leading the way in cutting edge-technology and innovation</p>
            </p>
            
            <footer className="footer bg-base-200 text-base-content p-10">

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;