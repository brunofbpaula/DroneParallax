import './Conteudo.css'
import inspire from '../../../img/04.png'

export default function Inspire(){

    const texto = "Inspire"

    return(

        <>
            <div className="box">
				<div className="thumbnail">
					<img src={inspire} alt={texto}/>
					<div className="text-center">
						<h3>Inspire</h3>
						<p>Expedita aut dignissimos obcaecati animi recusandae! Dicta eaque ipsa asperiores!</p>
					</div>
				</div>
			</div>        
        </>

    )

}