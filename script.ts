class ClothesClass {
    id: number;
    codProd: number;
    collezione: string;
    capo: string;
    modello: number;
    quantità: number;
    colore: string;
    prezzoIvaEsclusa: number;
    prezzoIvaInclusa: number;
    disponibile: string;
    saldo: number;
    constructor(_id: number, _codProd: number, _collezione: string, _capo: string, _modello: number, _quantità: number, _colore: string, _prezzoIvaEsclusa: number, _prezzoIvaInclusa: number, _disponibile: string, _saldo: number ){
        this.id = _id;
        this.codProd = _codProd;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantità = _quantità;
        this.colore = _colore;
        this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
        this.prezzoIvaInclusa = _prezzoIvaInclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo
    }
    
    getSaldoCapo(): number {
        return (this.prezzoIvaInclusa * this.saldo) / 100;
    }

    getAcquistoCapo(): number {
        let saldoIncompleto: number = this.prezzoIvaInclusa - this.getSaldoCapo()
        let saldoIncompletoStr: string = saldoIncompleto.toFixed(2);
        let saldoFinale: number = parseFloat(saldoIncompletoStr);
        return saldoFinale
    }

}

async function logClothes() {
    const response = await fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f");
    const clothes = await response.json();
    clothes.forEach(element => {
        // console.log(element)
        let prova = new ClothesClass(element.id, element.codprod, element.collezione, element.capo, element. modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
        console.log(prova)
        console.log(`Il capo è scontato del ${element.saldo}%, da ${element.prezzoivainclusa}€ a ${prova.getAcquistoCapo()}€`)
    });
}
logClothes()

