import React from 'react';
function Footer () {
    return (
        <footer className='footer'>

            <div className='content has-text-centered'>
                <p>
                    <strong>A Full Stack Development Portfolio</strong> - a React site made by{" "}
                    <a href='https://github.com/tmenture' target='_blank' rel='noreferrer'
                    >
                        Thomas Menture
                    </a> 
                    .
                    <br />
                    <a 
                        href="https://www.linkedin.com/in/thomasmenture"
                        target='_blank' rel="noreferrer"
                    >
                        LinkedIn 
                    </a>{" "}
                </p>
            </div>

        </footer>
    );
}

export default Footer;