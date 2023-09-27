import '../Conteudo.css'
import phantom from '../../../img/02.png'

export default function Phantom(){

    const texto = "Phantom"

    return(
        <>
			<div className="box">
				<div className="thumbnail">
					<img src={phantom} alt={texto}/>
					<div className="text-center">
						<h3>Phantom</h3>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum!</p>
					</div>
				</div>
			</div>        
        </>
    )

}