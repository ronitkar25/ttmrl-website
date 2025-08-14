# TTMRL Lab Website

This is the README file for the Trauma and Transfusion Medicine Research Laboratory (TTMRL) website. It was created by Ronit "Papai" Kar in 2025 and first uploaded to the pitt network on 08/14/2025. The website is continuously managed and updated by members of the TTMRL.

## Project Overview
The project is developed and edited using GitHub and deployed transiently using GitHub pages. These edits include code changes, adding files, adding or removing team members, etc. This can be done locally. Then the website is downloaded from GitHub and uploaded to the stage site on the Pitt network. This will confirm if everything is/looks appropriate before uploading to the production site. All instructions for doing this will be on the TTMRL OneDrive with clear instructions/protocolized details for whomever is responsible for upkeeping of the website.

## Folder Structure
- /archive                  - Contains an old, different version of the site. DO NOT upload this to the Pitt server
- /assets
    - /images               - Contains all images on the site
        - /collaborators    - Contains pics of all the collaborators found on the home page
        - /headshots        - Contains headshots for the team page
        - /news             - Contains images used for entries on the news page
    - /pubs                 - Contains PDF documents for all pubs on our site with them
- /data                     
    - news.json             - Contains non-code entries for the news page
    - publications.json     - Contains non-code entries for the publications page
    - team.json             - Contains non-code entries for our lab members to be used on the team page and the individual bio pages
- /scripts
    - load-bio.js           - Automatically generates bio page from team.json
    - load-news.js          - Automatically generates news page from news.json
    - load-publications.js  - Automatically generates publications page from publications.js
    - load-team.js          - Automatically generates team page from team.json
    - nav.js                - Contains code for adjusting navigation menu to mobile screens
- /styles                   - All css code files; note: mobile.css is the only place needed to adjust mobile screen changes

## Contact
For questions or support, contact ronit.kar20@gmail.com.

Ronit "Papai" Kar
MS4 Medical Student
UPMC PUH/MUH