// images
import blogImg1 from "../images/slider/one.jpg";
import blogImg2 from "../images/slider/one.jpg";
import blogImg3 from "../images/slider/one.jpg";

import blogSingleImg1 from "../images/slider/one.jpg";
import blogSingleImg2 from "../images/slider/one.jpg";
import blogSingleImg3 from "../images/slider/one.jpg";



const blogs = [ 
    {
        id: '1',
        title: 'Building resilient IT supply chains in Africa',
        slug: 'Building-resilient-it-supply-chains-in-africa',
        screens: blogImg1,
        description: 'How Digiroc ensures reliable hardware and software availability for enterprise operations across the region.',
        author: 'Digiroc Technologies',
        authorTitle:'IT Distribution',
        create_at: 'Feb 16, 2024',
        create_day: '16',
        create_month: 'Feb',
        create_year: '2024',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Choosing the right enterprise storage strategy',
        slug: 'Choosing-the-right-enterprise-storage-strategy',
        screens: blogImg2,
        description: 'Key considerations for backup, recovery, and data growth in modern enterprise environments.',
        author: 'Digiroc Technologies',
        authorTitle:'Infrastructure',
        create_at: 'March 17, 2024',
        create_day: '17',
        create_month: 'March',
        create_year: '2024',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Azure vs AWS for enterprise workloads',
        slug: 'Azure-vs-AWS-for-enterprise-workloads',
        screens: blogImg3,
        description: 'A practical comparison for hybrid environments, licensing, and governance at enterprise scale.',
        author: 'Digiroc Technologies',
        authorTitle:'Cloud Solutions',
        create_at: 'Jan 18, 2024',
        create_day: '18',
        create_month: 'Jan',
        create_year: '2024',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;