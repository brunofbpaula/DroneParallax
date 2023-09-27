import Audio from './Audio/Audio'
import Video from './Video/Video'

export default function Lojas(){

    return(
        <>
            <section className="img-site">
                <div className="container">
                    <h1 className="text-center">
                        Nossas Lojas
                    </h1>
                    <p className="text-center lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing, elit. Officiis placeat natus consequatur reiciendis soluta nihil itaque corporis repudiandae laudantium dolore. Minima provident cum pariatur, consectetur facere quae aspernatur nobis porro?
                    </p>
                    <div className="media">
                        <Audio/>
                        <Video/>
                    </div>
                </div>
            </section>
        </>
    )

}