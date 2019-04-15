import React, { Component } from 'react';

class Film extends Component {
constructor(props) {
   super(props);
   this.state = {
      name: '',
      poster: '',
      comment: '',
   }
   this.onChange = this.onChange.bind(this);
   this.submitForm = this.submitForm.bind(this);
}
onChange(e) {
   this.setState({
      [e.target.name]: e.target.value,
   });
}
submitForm(e) {
   e.preventDefault();
   const config = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
   }
   const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/"
      fetch(url, config)
      .then(res => res.json())
      .then(res => {
         if (res.error) {
         alert(res.error);
         } else {
         alert(`Film ajouté avec l'ID ${res}!`);
         }
      }).catch(e => {
         console.error(e);
         alert('Erreur lors de l\'ajout d\'un film');
      });
      }
   
   render() {
      return (
         <div className="FormFilm">
            <h1>Saisie d'un Film</h1>
            <form onSubmit={this.submitForm}>
               <fieldset><legend>Informations</legend>
                  <div className="form-data">
                     <label htmlFor="name">Name</label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={this.onChange}
                        value={this.state.name}
                     />
                  </div>
                  <div className="form-data">
                     <label htmlFor="poster">Poster</label>
                     <input
                        type="url"
                        id="poster"
                        name="poster"
                        pattern="https://.*" size="30"
                        required
                        onChange={this.onChange}
                        value={this.state.poster}
                     />
                  </div>
                  <div className="form-data">
                  <label for="comment">pourquoi tu aimes ce film? qu'est-ce qui t'a marqué? etc.</label>
                     <textarea
            
                        id="comment"
                        name="comment"
                        rows="5" cols="33"
                        required
                        onChange={this.onChange}
                        value={this.state.comment}
                        />
                  </div>
                  <hr />
                  <div className="form-data">
                     <input type="submit" value="Envoyer" />
                  </div>
               </fieldset>
            </form>
         </div>
      )
   }
}

export default Film