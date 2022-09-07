import React from 'react';


function Resume () {
    return (
        <div className='columns'>
            <div className='column'>
                <p className='content is-medium'>Resume</p>
                <br />
                <a
                    className='button is-success'
                    href="C:\Users\thoma\OneDrive\Desktop\Codeing_Folder\react-portfolio\public\images\Updated Resume.pdf" // should be {link to pdf of resume}
                    target="_blank" rel="noreferrer"
                >
                    <span className='icon'>
                        <i className='fas fa-download'></i>
                    </span>
                    <span>Download my Resume here!</span>
                </a>
            </div>
            <div className='column'>
                <p className='content is-medium is-underlined'>Skills:</p>
                
                <ul>
                    <li>JavaScript, HTML, CSS, Markdown</li>
                    <li>Restfull API usage and creation</li>
                    <li>React, Node.js, MYSQL, MongoDB </li>
                    <li>Git, Github Repositories, Github Actions</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;