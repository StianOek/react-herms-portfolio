import project from './img/project.jpg';
import project2 from './img/code2.jpg';
import project3 from './img/code3.jpg';
import project4 from './img/code4.jpg';
import project5 from './img/Mac.jpg';
import ImageOne from '../src/img/code.jpg';
import ImageTwo from '../src/img/Mac.jpg';
import ImageThree from '../src/img/work.jpg';
import ImageFour from '../src/img/work2.jpg';

export const CONSULTANT = "CONSULTANT";
export const FRONTEND = "FRONT_END";
export const WEBDEVELOPER = "WEBDEVELOPER";
export const BACKEND = "BACKEND";

const WorkState = [
    {
        id: 1,
        image: ImageOne,
        title: 'the Zeipt factory',
        jobTitle: 'Web developer',
        categories: [WEBDEVELOPER],
        mainImg: project,
        pic: project2,
        pic2: project3,
        url: "/work/zeipt",
        desc: [
            {
                title: 'Description',
                description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                tools: 'React, Golang, ReactNative'
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
  
        

        
    
