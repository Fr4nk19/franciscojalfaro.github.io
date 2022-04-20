import expert1 from '../media/logocaja.png';
import expert2 from '../media/logo-comb 1.png';
import expert3 from '../media/2020.png';
import expert4 from '../media/logo-violeta 1.png';
import expert5 from '../media/Logo-Ido-Digital-01 1.png';

const expertise = [
    {
        imgUrl: expert1,
        title: 'Professional Practices',
        description: 'Web Mainteinance, Joomla & Wordpress. Desktop Development, Magic & SQL',
        date: 'Nov 2016 - March 2017',
        specialClass: 'right'
    },
    {
        imgUrl: expert2,
        title: 'Frontend Developer',
        description: 'Shopify Developer & Store Maintenance. Wordpress Developer & Website Maintenance', 
        date: 'March 2017 - Dec 2018',
        specialClass: 'left'
    },
    {
        imgUrl: expert3,
        title: 'Web Development',
        description: 'I build websites and web applications using the latest technologies and frameworks.', 
        date: '2019',
        specialClass: 'right'
    },
    {
        imgUrl: expert4,
        title: 'Web Development',
        description: 'I build websites and web applications using the latest technologies and frameworks.',
        date: '2019',
        specialClass: 'left'
    },
    {
        imgUrl: expert5,
        title: 'Web Development',
        description: 'I build websites and web applications using the latest technologies and frameworks.',
        date: '2019',
        specialClass: 'right'
    }
]

export const Experience = () => {
    return(
        <>
            <div className="wrap_experience" id="experience">
                <div className="title_sect">
                    <h2>Experience</h2>
                <div className="wrap_expert">
                    {expertise.map((expert, index) => (
                        <div key={index} className={`col_expert ${expert.specialClass}`}> 
                            <div className="wrap_expert_img">
                                <img src={expert.imgUrl} alt="expert" />
                                </div>
                                <div className="wrap_expert_info">
                                    <h3>{expert.title}</h3>
                                    <p>{expert.description}</p> 
                                    <p>{expert.date}</p>
                                    </div>
                                    <div className="dot_item"></div>
                                    </div>
                                    ))}
                  
                  <div className="line"></div>
                </div>
                    

                </div>
            </div>
        </>
    )
}