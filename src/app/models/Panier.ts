import { StructurePanier } from "./StructurePanier";

export class Panier implements StructurePanier {
    constructor(
        public id: number,
        public prix: number,
        public articles: [{
            nom: string,
            quantite: number,
        }],
        public nbTotalBox: number
    ) {}
}

