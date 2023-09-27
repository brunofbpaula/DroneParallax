import sound from '../../../arq/audio/GuardioesGalaxia.mp3'
import '../Lojas.css'

export default function Audio(){

    return(
        <>
            <div className="box ladoA">
                <audio controls>
                    <source scr={sound} type="audio/mpeg"/>
                    Este navegador não suporta a mídia
                </audio>
            </div>        
        </>
    )
}