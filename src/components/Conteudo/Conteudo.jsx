import './Conteudo.css'

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

				
				<div className="box">
					<div className="thumbnail">
						<img src="img/02.png" alt=""/>
						<div className="text-center">
							<h3>Phantom</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum!</p>
						</div>
					</div>
				</div>
				<div className="box">
					<div className="thumbnail">
						<img src="img/03.png" alt=""/>
						<div className="text-center">
							<h3>Mavic</h3>
							<p>Corporis quas obcaecati quia provident accusantium officiis eaque repudiandae error.</p>
						</div>
					</div>
				</div>
				
			</div>	
		</section>
        </>

    )

}