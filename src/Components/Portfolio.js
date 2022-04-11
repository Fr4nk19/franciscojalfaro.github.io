import image1 from '../media/image1.jpg'
const projects = [
    {
        name: 'Project 1',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        image: image1,
        link: '#',
    },
    {
        name: 'Project 2',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        image: image1,
        link: '#',
    },
    {
        name: 'Project 3',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        image: image1,
        link: '#',
    },
    {
        name: 'Project 4',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
        image: image1,
        link: '#',
    }
]

export const PortFolio = () => {
    return(
    <div className="py-12 bg-white" id='portfolio'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          PORTFOLIO
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {projects.map((project) => 
                <div key={project.name} className="project_card">
                    <div className="project_card_image">
                        <img src={project.image} alt={project.name} />
                    </div>
                    <div className="project_card_content">
                        <h3 className="project_card_title">{project.name}</h3>
                        <p className="project_card_description">{project.description}</p>
                    </div>    
              </div>
            )}
          </dl>
        </div>
      </div>
      </div>
    )
}