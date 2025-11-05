import React from 'react';

export const IndianFlagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
        <rect width="900" height="600" fill="#f93"/>
        <rect width="900" height="400" fill="#fff"/>
        <rect width="900" height="200" fill="#128807"/>
        <g transform="translate(450,300)">
            <circle r="90" fill="#000080"/>
            <circle r="75" fill="#fff"/>
            <circle r="15" fill="#000080"/>
            <g id="d">
                <g id="c">
                    <g id="b">
                        <g id="a">
                            <path d="M0-75v15h4.5z" fill="#000080"/>
                            <path d="M0-75v15h4.5z" fill="#000080" transform="rotate(7.5)"/>
                        </g>
                        <use href="#a" transform="rotate(7.5)"/>
                    </g>
                    <use href="#b" transform="rotate(15)"/>
                </g>
                <use href="#c" transform="rotate(30)"/>
            </g>
            <use href="#d" transform="rotate(60)"/>
            <use href="#d" transform="rotate(120)"/>
            <use href="#d" transform="rotate(180)"/>
        </g>
    </svg>
);
