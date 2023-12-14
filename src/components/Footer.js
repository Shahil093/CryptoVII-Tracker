import React from 'react';

const footerStyle = {
    backgroundColor: 'yellow', 
    padding: '10px',
    position: 'sticky',
    bottom: '0',
    width: '100%',
    textAlign: 'center', 
    color: 'black', 
    borderTop: '1px solid #ddd' 
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p><b>Copyright © 2023</b> <strong><a href="https://github.com/Shahil093" target="_blank" rel="noopener noreferrer" title="Go to Github profile"style={{ color: 'black' }}>📥Contact Click On Github</a></strong></p>
                </footer>
    );
}

export default Footer;