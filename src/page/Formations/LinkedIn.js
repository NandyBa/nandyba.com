import './Formation.css'

const FormationLinkedIn = () => {
    return(
        <>
            <h1>Formation LinkedIn</h1>

            <div>
                <div className="video">
                     <iframe width='100%'src="https://youtu.be/embed/aag6QmmhXxM" title="Youtube - Formation LinkedIn"/>
                </div>
               
                <div className='video-parts'>
                    <b>Contenu</b>
                    <ul style={{
                        marginLeft: '10%',
                    }}>
                        <li>
                            <a href="#h2-profile"> I: Avoir un profil adapté à la recherche de stage</a>
                        </li>

                        <li>
                            <a href="#h2-reseau">II: Développer son réseau</a>
                        </li>
                        <li>
                            <a href="#h2-stage">III: Recherche de stage</a>
                        </li>
                    </ul>
                </div>
            </div>

            <main>
                <h2 id="h2-profile">Avoir un profil adapté à la recherche de stage</h2>
                <ul style={{
                    listStyle: 'inside'
                }}>
                    <li>Ajouter une photo</li>
                    <li>Avoir un titre adapté au poste visé</li>
                    <li>Détailler son parcours d’étude</li>
                    <li>Détailler ses expérience professionnel</li>
                    <li>Ajouter les langues que l’on maîtrise</li>
                    <li>Passer des certifications</li>
                    <li>Lister ses compétences</li>
                </ul>

                <h3>Pour sortir du lot</h3>
                <ul style={{
                    listStyle: 'inside'
                }}>
                    <li>Ajouter des mots clés dans son profil</li>
                    <li>Recevoir des recommandations</li>
                </ul>

                <h2 id="h2-reseau">Développer son réseau</h2>

                <ul style={{
                    listStyle: 'inside'
                }}>
                    <li>Ajouter ses connaissances professionnelles</li>
                    <li>Ajouter ses amis qui ont un métier similaire (même domaine d’activité)</li>
                    <li>Recherche de personnes ayant un poste que je convoite / entreprise dans laquelle j’aimerais bien travailler</li>
                </ul>
                
                <h2 id="h2-stage">Recherche de stage</h2>

                <ul style={{
                    listStyle: 'inside'
                }}>
                    <li>Ajouter son CV à son profil</li>
                    <li>Vérifier que nos compétences présentes sur LinkedIn sont bien à jour et en ajouter d’autres si besoin</li>
                    <li>Recherche de par mots clés</li>
                    <li>Solliciter son réseau / candidature spontanée</li>
                    <li>Ajouter des RH dans ses contacts</li>
                    <li>Tenir un journal de bord des candidatures et de l'avancé du processus de recrutement</li>
                </ul>
            </main>

            
        </>
    )
}

export default FormationLinkedIn
