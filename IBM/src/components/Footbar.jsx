import React from 'react';

// Footbar should be at the bottom of the page
const Footbar = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <span style={styles.text}>
                    © {new Date().getFullYear()} IBM Clone. All rights reserved by Kumail.
                </span>
                <nav style={styles.nav}>
                    <a href="#" style={styles.link}>Privacy</a>
                    <a href="#" style={styles.link}>Terms</a>
                    <a href="#" style={styles.link}>Contact</a>
                </nav>
            </div>

        </footer>
    );
};
const styles = {
    footer: {  
        background: '#161616',
        color: '#fff',
        padding: '20px 0',
        marginTop: 'auto',
        position: 'bottom', //footer should be at the bottom of the page
        left: 0,
        right: 0,
        width: '100%',
        boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.1)',
        zIndex: 10,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '0 20px',
    },
    text: {
        fontSize: '14px',
    },
    nav: {
        display: 'flex',
        gap: '16px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'color 0.2s',
    }
};


export default Footbar;