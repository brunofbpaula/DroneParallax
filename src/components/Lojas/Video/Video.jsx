import vid from '../../../arq/video/BabyGrootDançando.mp4'

export default function Video(){

    return(
        <>
            <div class="box ladoB">
                <video controls>
                    <source src={vid} type="video/mp4"></source>
                    Este navegador não suporta a mídia
                </video>
            </div>        
        </>
    )

}