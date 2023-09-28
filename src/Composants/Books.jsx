
import React, { useState } from 'react';
import '/Users/abdallah/mini_projet_react/src/Composants/Books.css';


 function DescriptionLivres  ()  {
  const [book, setbook] = useState(
    [
            {   id:1,
            titre:"Rich dad Poor dad",
            description:"livre révolutionnaire sur la richesse et la liberté financière.",
            image:"./images/RichPoor.png"
            }
            ,{  id:2,
                titre:"The Lord of the Rings",
                description:"une épopée mythique dans un monde fantastique, où se mêlent courage, quête de pouvoir et amitié.", // Les Livres Initiale : on initialise les livres dans la Use state 
                image:"./images/lord.png"},
            {
                id:3,
                titre:"Clean Code",
                description:"le guide essentiel pour écrire un code clair, maintenable et de qualité.",
                image:"./images/cleancode.png"
            } ,
            {
              id:4,
              titre: "Les Misérables",
              description:"Une épopée émouvante sur la misère, l'amour et la rédemption dans le Paris du XIXe siècle.",
              image:"https://images.epagine.fr/063/9782075128063_1_75.jpg"
            }   ,      
            {
              id:5,
              titre: "The Pragmatic Programmer",
              description:"Un guide essentiel pour les programmeurs, offrant des conseils pratiques et des principes clés pour développer des logiciels de qualité.",
              image:"https://m.media-amazon.com/images/I/51yaxPX4BFL.jpg"
            }                                        
                                                                                                


    ]);
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
   
    const ajouterLivre = (e) => {
        e.preventDefault();
    
        const nouveauLivre = {
          id: Date.now(),
          titre: titre,
          description: description,
          image: image,
        };
    
        setbook([...book, nouveauLivre]);
    
        setTitre('');
        setDescription('');
        setImage('');
      };
  

  const supprimerLivre = (id) => {
    const book_copy = [...book]
    const book_update = book_copy.filter(fruit=>fruit.id!==id)
    setbook(book_update)

  };

  return (
    <div className='container'>
      <h2>Bienvenue dans la page des Livres</h2>
      <div className="form-container">
        <h3>Ajouter un livre</h3>
        
        <form onSubmit={ajouterLivre}>
            
        
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Titre"
          />
          <br/>
          <br/>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <br/>
          <br/>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image (URL)"
          />
          <br/>
          <br/>
          <button type="submit">Ajouter</button>
        </form>
      </div>

      <div className="list-container">
        <h3>Liste des livres</h3>
        </div>
        <div>
        {book.map((x) => (
        <div className="book-card">
          <div key={x.id}>
            <h3 style={{fontFamily:'monospace'}}>{x.titre}</h3>
            <p style={{fontFamily:'monospace'}}>{x.description}</p>
            <button onClick={() => supprimerLivre(x.id)}>x</button>
        </div>
        <center>
        <div className='polaroid'>
            <img src={x.image} width="200" height="290" />
        </div>  
        </center>  
          </div>
        )
        )
        }
      </div>
    </div>
  );
        
  
        };
export default DescriptionLivres;
