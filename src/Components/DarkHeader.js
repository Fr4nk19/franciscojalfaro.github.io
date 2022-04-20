const urls = [
    {
    'label': 'Experience',
    'url': '/#experience',
    },
    {
    'label': 'Skills',
    'url': '/#skills',
    },
    {
    'label': 'Contact',
    'url': '/#contact',
    },
    {
    'label': 'Resume',
    'url': '/#resume',
    }
];

export const DarkHeader = () => {
    return (
        <>                
    <div className="nav_desk">
        {urls.map((url, index) => (
            <div key={index} className="col_menu">
                <a href={url.url}> {url.label} </a>
            </div>
            ))}

    </div>
        </>
    )
}