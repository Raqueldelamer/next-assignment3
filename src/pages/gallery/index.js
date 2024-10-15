import 'bootstrap/dist/css/bootstrap.min.css';

export default function GalleryPage() {
    let images = [
        { src: 'imgs/gargoyle.jpg', title: 'Gargoyle' },
        { src: 'imgs/cemetery-couple.jpg', title: 'Til Death' },
        { src: 'imgs/walkway-spook.jpg', title: 'Enter Spook' },
        { src: 'imgs/ghosttree.jpg', title: 'Ghost Tree' },
        { src: 'imgs/ghosthouse-copy.jpg', title: 'Ghost House' },
        { src: 'imgs/michaeopolis-1.jpg', title: 'French Quarter' },
    ];

    const divStyle = {
        backgroundImage: `url(imgs/pexels-cemetery1.jpg)`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        color: 'black', 
    };

return (

    <div style={divStyle}>
        <h1>GALLERY</h1>
            <div className="container text-center">
                <div className="row">
                {images.slice(0, 3).map((img, index) => (
                        <div className="col" key={index}>
                            <img src={img.src} alt={img.title} className="img-fluid" />
                            <h5>{img.title}</h5>
                        </div>
                        ))}
                    </div>
                    <div className="row">
                        {images.slice(3, 6).map((img, index) => (
                            <div className="col" key={index + 3}>
                            <img src={img.src} alt={img.title} className="img-fluid" />
                            <h5>{img.title}</h5>
                    </div>
                    ))}
                </div>
            </div>
    </div>
    );
}
    