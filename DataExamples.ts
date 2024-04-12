import { IPost } from "./src/models/IPost";
export const posts: Array<IPost> = [
    {
    id: 'v1',
    createdAt: '19 December 2021',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
    user: {
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        username: 'vadimnotjustdev',
    },
    video : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    nofComments: 11,
    nofLikes: 33,
    comments: [
        {
            id: '1',
            comment: 'Hello there',
            user: {
                username: 'vadimnotjustdev',
            },
        },
        {
            id: '2',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
            user: {
                username: 'vadimnotjustdev',
            },
        },
    ],
},
    {
    id: '1',
    createdAt: '19 December 2021',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
    user: {
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        username: 'vadimnotjustdev',
    },
    images :[
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg',
    ],
    nofComments: 11,
    nofLikes: 33,
    comments: [
        {
            id: '1',
            comment: 'Hello there',
            user: {
                username: 'vadimnotjustdev',
            },
        },
        {
            id: '2',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
            user: {
                username: 'vadimnotjustdev',
            },
        },
    ],
},
{
    id: '2',
    createdAt: '20 December 2021',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
    user: {
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        username: 'vadimnotjustdev',
    },
    nofComments: 11,
    nofLikes: 33,
    comments: [
        {
            id: '1',
            comment: 'Hello there',
            user: {
                username: 'vadimnotjustdev',
            },
        },
        {
            id: '2',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
            user: {
                username: 'vadimnotjustdev',
            },
        },
    ],
},
{
    id: '3',
    createdAt: '20 December 2021',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
    user: {
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        username: 'vadimnotjustdev',
    },
    nofComments: 11,
    nofLikes: 33,
    comments: [
        {
            id: '1',
            comment: 'Hello there',
            user: {
                username: 'vadimnotjustdev',
            },
        },
        {
            id: '2',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
            user: {
                username: 'vadimnotjustdev',
            },
        },
    ],
},
];
