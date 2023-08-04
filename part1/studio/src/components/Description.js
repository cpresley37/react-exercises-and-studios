import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    const authorLink = "https://tastesbetterfromscratch.com/about/";
    const authorPhoto = "https://tastesbetterfromscratch.com/wp-content/uploads/2023/05/TL_2a68rd-667x1024.jpg";
    const authorName = "Lauren Allen";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Lauren Allen" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Shredded Beef Enchiladas</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
                <div>
                    <h1>Shredded Beef Enchiladas</h1>
                    <p>Beef Enchiladas made with tender shredded beef cooked in a simple homemade enchilada sauce, then layered in tortillas and cheese to make delectable enchiladas.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;