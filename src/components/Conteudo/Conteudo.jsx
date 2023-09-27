import './Conteudo.css'
import Phantom from './Phantom/Phantom'
import Mavic from '../Conteudo/Mavic/Mavic'
import Inspire from '../Conteudo/Inspire/Inspire'

export default function Conteudo(){

    return(
        <>
        <section className="conteudo-site">
			<div className="container">
				<h1 className="text-center">
					Melhores Drones
				</h1>
				<p className="text-center lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error accusantium laborum, hic nisi soluta quasi veritatis quod quam, architecto voluptatibus quibusdam quisquam consequuntur eum doloribus impedit aperiam nobis libero!
				</p>
				<Phantom/>
				<Mavic/>
				<Inspire/>
			</div>	
		</section>
        </>
    )
}