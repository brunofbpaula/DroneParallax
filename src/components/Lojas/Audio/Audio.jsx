import sound from '../../../arq/audio/GuardioesGalaxia.mp3'

export default function Audio(){

    return(
        <>
            <div className="box ladoA">
                <audio constrols>
                    <source scr={sound} type="audio/mpeg"/>
                    Este navegador não suporta a mídia
                </audio>
            </div>        
        </>
    )
}