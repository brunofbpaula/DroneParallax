import Sound from '../../../arq/audio/GuardioesGalaxia'
import '../Lojas.css'

export default function Audio(){

    return(
        <>
            <div className="box ladoA">
                <audio id="Audio Guardiões" controls>
                    <source scr={Sound} type="audio/mpeg"/>
                    Este navegador não suporta a mídia
                </audio>
            </div>        
        </>
    )
}