import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-4">
            <div className="container mx-auto text-center">
            <a href="https://www.linkedin.com/in/ks-iitjmu/" target='_blank' className="text-xs md:text-base">&copy; {new Date().getFullYear()} Made With ❤️ By <span className='underline'>Kunal Sharma</span></a>
            </div>
        </footer>
    );
};

export default Footer;