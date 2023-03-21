/**
 * Représente la structure de données d'un panier
 * L'id sera autogénéré par l'application (null si nouveau)
 */
export interface StructurePanier {
    id: number,
    prix: number,
    articles:[{
        nom: string,
        quantite: number
    }],
    nbTotalBox: number, 
}
