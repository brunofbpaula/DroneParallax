import '../Conteudo.css'
import mavic from '../../../img/03.png'

export default function Mavic(){

    const texto = "Mavic"

    return(
        <>
            <div className="box">
				<div className="thumbnail">
					<img src={mavic} alt={texto}/>
					<div className="text-center">
						<h3>Mavic</h3>
						<p>Corporis quas obcaecati quia provident accusantium officiis eaque repudiandae error.</p>
					</div>
				</div>
			</div>        
        </>
    )
}