import { Card, CardGroup } from "react-bootstrap"

export const Content = () => {
    return (

        <div className="rooms">
            <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1722201172121-9ab816dc1c34?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body>
                <Card.Title>Colline</Card.Title>
                <Card.Text>
                Perchée sur les collines de Positano, cette maison offre une vue panoramique sur la Méditerranée. Avec ses chambres confortables et sa terrasse privée, elle est idéale pour se détendre tout en explorant la côte amalfitaine.
                </Card.Text>
            </Card.Body>
            
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1631970283998-871d73a06140?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body>
                <Card.Title>Mer</Card.Title>
                <Card.Text>
                Cette maison au cœur de Positano offre un accès direct à la mer. Avec son style typique et son emplacement idéal, elle est parfaite pour des vacances entre plage et découverte.
                </Card.Text>
            </Card.Body>
            
            </Card>
            <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1711701024385-69456482559d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
                <Card.Title>Centre Ville</Card.Title>
                <Card.Text>
                Située au centre de Positano, cette maison allie confort et praticité. À deux pas des boutiques, restaurants et plages, elle est idéale pour profiter pleinement du charme du village.
                </Card.Text>
            </Card.Body>
            </Card>
        </CardGroup>
        </div>

    )
}

export default Content