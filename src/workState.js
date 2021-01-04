import project from './img/project.jpg';
import project2 from './img/code2.jpg';
import project3 from './img/code3.jpg';

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
                    description: 'As when i was taking my bachelor in IT i was lucky to become a part of the zeipt team as a part time counselor. My main area of responsibilty were to maintain our main site.  ',
                    tools: 'React, Golang, ReactNative'
                }
            ]
            
        },

        {
            title: 'Storebrand',
            mainImg: project,
            url: "/work/storebrand",
            desc: [
                {
                    title: 'Front-end',
                    description: 'Lorem borem, little skorem, with floren and shorem'
                }

            ]
            
        }

    ];
};