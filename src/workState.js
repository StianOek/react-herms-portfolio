import project from './img/project.jpg';
import project2 from './img/code2.jpg';
import project3 from './img/code3.jpg';
import project4 from './img/code4.jpg';
import project5 from './img/Mac.jpg';

export const WorkState = () => {
    return [
        {
            title: 'the Zeipt factory',
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
            title: 'Storebrand',
            mainImg: project,
            pic: project4,
            pic2: project5,
            url: "/work/storebrand",
            desc: [
                {
                    title: 'Description',
                    description: 'Lorem borem, little skorem, with floren and shorem',
                    tools: "Html, CSS(SASS), Javascript, Adobe XD"
                }

            ]
            
        }

    ];
};