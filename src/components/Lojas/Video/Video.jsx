import vid from '../../../arq/video/BabyGrootDançando.mp4'
import thumbnail from '../../../img/groot.png'
import '../Lojas.css'

export default function Video(){

    return(
        <>
            <div className="box ladoB">
                <video controls poster={thumbnail}>
                    <source src={vid} type="video/mp4"></source>
                    Este navegador não suporta a mídia
                </video>
            </div>        
        </>
    )

}