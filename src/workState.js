import project from './img/project.jpg';
import project2 from './img/code2.jpg';
import project3 from './img/code3.jpg';
import project4 from './img/code4.jpg';
import project5 from './img/Mac.jpg';
import ImageOne from '../src/img/code.jpg';
import ImageTwo from '../src/img/Mac.jpg';
import ImageThree from '../src/img/work.jpg';
import ImageFour from '../src/img/work2.jpg';
import codeSnippetOne from '../src/img/codeSnippet_one.png'
export const CONSULTANT = "CONSULTANT";
export const FRONTEND = "FRONT_END";
export const WEBDEVELOPER = "WEBDEVELOPER";
export const BACKEND = "BACKEND";
export const UXDEVELOPER = "UXDEVELOPER";

const WorkState = [
    {
        id: 1,
        image: ImageOne,
        title: 'the Zeipt factory',
        jobTitle: 'Web developer, Front-end, UX-Developer',
        categories: [WEBDEVELOPER, FRONTEND, UXDEVELOPER],
        mainImg: codeSnippetOne,
        pic: project2,
        pic2: project3,
        url: "/work/zeipt",
        desc: [
            {
                title: 'My work with Zeipt',
                tools: 'React, Redux, Styled-components, Adobe illustrator',
                desc: 'I was lucky to get the job for an internship position with the zeipt factory located in oslo at the end of my first semester. the first three months, the zeipt team wanted me to build myself a portfolio with a few tools requirments, which were React.js including all libraries and framworks that followed. After three months i had the portfolio up and running. In fact its the portfolio you are visiting right now.',
                descTwo: 'Time passed by, and after three months i get to work on production material. ',
                link: "https://zeipt.stianhermansen.com/#/solution",
            }
        ]
        
    },

    {
        id: 2,
        image: ImageTwo,
        title: 'HurlaMei',
        jobTitle: 'Consultant',
        categories: [CONSULTANT],
        mainImg: project,
        pic: project4,
        pic2: project5,
        url: "/work/hurlamei",
        desc: [
            {
                title: 'Description',
                description: 'Lorem borem, little skorem, with floren and shorem',
                tools: "Html, CSS(SASS), Javascript, Adobe XD"
            }

        ]
        
    },

    {
        id: 3,
        image: ImageThree,
        title: 'Lorem',
        jobTitle: 'Front-End',
        categories: [FRONTEND],
        mainImg: project,
        pic: project4,
        pic2: project5,
        url: "/work/lorem",
        desc: [
            {
                title: 'Description',
                description: 'Lorem borem, little skorem, with floren and shorem',
                tools: "Html, CSS(SASS), Javascript, Adobe XD"
            }

        ]
        
    },

    {
        id: 4,
        image: ImageFour,
        title: 'Ipsum',
        jobTitle: 'Front-End & Back-End',
        categories: [BACKEND, FRONTEND],
        mainImg: project,
        pic: project4,
        pic2: project5,
        url: "/work/ipsum",
        desc: [
            {
                title: 'Description',
                description: 'Lorem borem, little skorem, with floren and shorem',
                tools: "Html, CSS(SASS), Javascript, Adobe XD"
            }

        ]
        
    }

];

export default WorkState;
  
        

        
    
