import { useState } from "react";
import { api } from "@/features/exchange/services/api";

export function useExchangeList() {

    const [monetaryValue, setMonetaryValue] = useState('')
    const [mensage, setMensage] = useState('')
    const [typeCoinInit, setTypeCoinInit] = useState('')
    const [typeCoinFinal, setTypeCoinFinal] = useState('')



    const monetaryValidation = async () => {

        if (!monetaryValue) {
            setMensage('Digite um valor válido!')
            return
        }


        const result = await api.getEpisodes()

        if (result.kind === "ok") {
          //  console.log(result.episodes)
        } else {
           // console.error("Erro na API:", result.kind)
        }










    }


    return {
        monetaryValue,
        setMonetaryValue,
        monetaryValidation,
        mensage,
        setMensage,
        typeCoinInit,
        setTypeCoinInit,
        typeCoinFinal,
        setTypeCoinFinal

    }

}