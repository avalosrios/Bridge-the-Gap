const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const groups = [
    {
        id: 0,
        title: "Family",
        img: "/deafult_group_pic.png",
        members: [
            {
                name: "Jackson",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Addy",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Mom",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Dad",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "User",
                profile_img: "/default_profile_pic.jpg"                
            },
            {
                name: "User",
                profile_img: "/default_profile_pic.jpg"                
            },
            {
                name: "User",
                profile_img: "/default_profile_pic.jpg"                
            },
            {
                name: "User",
                profile_img: "/default_profile_pic.jpg"                
            },
            {
                name: "User",
                profile_img: "/default_profile_pic.jpg"                
            }
            
        ],
        posts: [
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
        ]
    },
        {
        id: 1,
        title: "Lapeer Friends",
        img: "/deafult_group_pic.png",
        members: [
            {
                name: "Jackson",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Aidan",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Mason",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Will R.",
                profile_img: "/default_profile_pic.jpg"
            },
        ],
        posts: [
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
        ]
    },
        {
        id: 2,
        title: "College Friends",
        img: "/deafult_group_pic.png",
        members: [
            {
                name: "Jackson",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Will C.",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Ansh",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Williams",
                profile_img: "/default_profile_pic.jpg"
            },
        ],
        posts: [
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
            {
                author: "Jackson",
                title: "New Post",
                img: '/default_post_pic.png'
            },
        ]
    },
    {
        id: 3,
        title: "Girlfriend",
        img: "/deafult_group_pic.png",
        members: [
            {
                name: "Jackson",
                profile_img: "/default_profile_pic.jpg"
            },
            {
                name: "Berkley",
                profile_img: "/default_profile_pic.jpg"
            },
        ],
    },
    ]

    const users = [
        {
            username: "Jackson",
            password: "1234",
            photo: "/default_profile_pic.jpg",
            location: "Menlo Park, CA",
            email: "newuser0@meta.com",
        },
                {
            username: "New User0",
            password: "1234",
            photo: "/default_profile_pic.jpg",
            location: "Menlo Park, CA",
            email: "newuser1@meta.com",
        },
                {
            username: "New User1",
            password: "1234",
            photo: "/default_profile_pic.jpg",
            location: "Menlo Park, CA",
            email: "newuser2@meta.com",
        },
                {
            username: "New User2",
            password: "1234",
            photo: "/default_profile_pic.jpg",
            location: "Menlo Park, CA",
            email: "newuser3@meta.com",
        },
                {
            username: "New User3",
            password: "1234",
            photo: "/default_profile_pic.jpg",
            location: "Menlo Park, CA",
            email: "newuser4@meta.com",
        },
    ]




}   