import GuardioesGalaxia from '../../../arq/audio/GuardioesGalaxia.mp3'
import '../Lojas.css'

export default function Audio(){

    return(
        <>
            <div className="box ladoA">
                <audio id="Audio Guardiões" controls>
                <source src={GuardioesGalaxia} type="audio/mpeg" />
                Este navegador não suporta a mídia
                </audio>
            </div>       
        </>
    )
}