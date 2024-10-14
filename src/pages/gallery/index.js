import 'bootstrap/dist/css/bootstrap.min.css';

export default function GalleryPage() {
    let images = [
        'imgs/gargoyle.jpg',
        'imgs/cemetery-couple.jpg',
        'imgs/walkway-spook.jpg',
        'imgs/ghosttree.jpg',
        'imgs/ghosthouse-copy.jpg',
        'imgs/michaelopolis-copy.jpg',
    ];

    return  (
    <div>

    <h1>Gallery</h1> 

    </div>
    );

    return (

<div class="container text-center">
    <div class="row">
        <div class="col">
            <img alt="cemetery-couple" class="img-card" src="imgs/cemetery-couple.jpg">
            <p>Til Death</p>
        </div> 
        <div class="col">
            <img alt="gargoyle" class="img-card" src="imgs/gargoyle.jpg">
            <p>Gargoyle</p>
        </div>
        <div class="col">
            <img alt="ghost-house" class="img-card" src="imgs/ghosthouse-copyjpg">
            <p>Ghost House</p>
        </div>
        <div class="col">
            <img alt="ghost-tree" class="img-card" src="imgs/ghosttree.jpg">
            <p>Ghost Tree</p>
        </div>
        <div class="col">
            <img width="200 px" alt="michaelopolis" class="img-card" src="imgs/michaelopolis-copyjpg">
            <p>French Quarter</p>
        </div>
        <div class="col">
            <img alt="spook" class="img-card" src="imgs/walkway-spook.jpg">
            <p>Spooks</p>
        </div>


        </div>
    </div>
);

}