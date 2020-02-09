import React from 'react';
import {IconButton, Tooltip} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';


function PoweredByLinks()
{
    return (
        <FuseAnimateGroup
            enter={{
                animation: "transition.expandIn"
            }}
            className="hidden sm:flex items-center"
        >
            <Tooltip title="Hidrofito" placement="top">
                <IconButton className="w-48 h-48 px-4" component="a" href="#" target="_blank" rel="noreferrer noopener">
                    <img
                        src="assets/images/logos/hidrofito_logo.svg"
                        alt="350"
                        width="350"
                    />
                </IconButton>
            </Tooltip>
           
            
            <Tooltip title="Macro-Agua" placement="left">
                <IconButton className="w-48 h-48 px-4" component="a" href="#" target="_blank" rel="noreferrer noopener">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: `
                                    <svg style="height: 0; width: 0; position: absolute; visibility: hidden;">
                                      <defs>
                                        <linearGradient x1="0%" y1="0%" y2="100%" id="logoGradient">
                                          <stop stop-color="#2383AE" offset="0%"></stop>
                                          <stop stop-color="#6DD7B9" offset="100%"></stop>
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <svg class="w-48 h-48 block" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 11.1C15.3 3.9 19.8.3 27 .3c10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 27.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" transform="translate(5 16)" fill="url(#logoGradient)" fill-rule="evenodd"></path></svg>
                                    `
                        }}
                    />
                </IconButton>
            </Tooltip>
        </FuseAnimateGroup>
    );
}

export default PoweredByLinks;
