import simg from '../images/service-single/img-1.jpg'
import simg3 from '../images/service-single/img-3.jpg'
import simg4 from '../images/service-single/img-4.jpg'



const Services = [
    {
        Id: '1',
        sImg:simg,
        sTitle:'IT Distribution & Supply Chain',
        slug:'IT-Distribution',
        description:'Authorized distribution of laptops, desktops, servers, networking, storage, and enterprise software across Africa.',
        des2:'We manage vendor partnerships, inventory planning, logistics, and warranty support to keep enterprise operations running smoothly.',
        des3:'Ideal for enterprises, institutions, and resellers needing reliable supply and lifecycle support.',
        icon:'flaticon-sheriff',
    },

    {
        Id: '3',
        sImg:simg3,
        sTitle: 'Enterprise Cloud & Productivity',
        slug:'Enterprise-Cloud',
        description:'Azure, AWS, Microsoft 365, and virtualization solutions designed for secure, scalable enterprise workloads.',
        des2:'We design, license, and implement cloud and productivity stacks with governance, security, and compliance best practices.',
        des3:'For organizations modernizing infrastructure and enabling hybrid work.',
        icon:'flaticon-stats',
    },
    {
        Id: '4',
        sImg:simg4,
        sTitle: 'Data Storage & Infrastructure',
        slug:'Data-Storage-Infrastructure',
        description:'Storage, backup, disaster recovery, and infrastructure modernization for resilient enterprise operations.',
        des2:'From SAN/NAS to backup and data protection, we deliver architecture, supply, and deployment services.',
        des3:'Built for uptime, compliance, and growth.',
        icon:'flaticon-start',
    },

]    

export default Services;