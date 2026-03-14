/**
 * These types indicate the shape of the data you expect to receive from your
 * API endpoint, assuming it's a JSON object like we have.
 */
/* "USDBRL": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro",
        "high": "5.734",
        "low": "5.7279",
        "varBid": "-0.0054",
        "pctChange": "-0.09",
        "bid": "5.7276",
        "ask": "5.7282",
        "timestamp": "1618315045",
        "create_date": "2021-04-13 08:57:27" */


export interface ApiFeedResponse {
  compra: number
  venda: number
  fechoAnterior: number
  nome: string
  moeda: string
  dataAtualizacao: string 
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
