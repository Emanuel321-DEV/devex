import axios from "axios";
import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface ImageDataProps {
    id: string;
    img_src: string;
    earth_date: string;
}

interface GetImagesResponse {
    photos: ImageDataProps[];
}

const CardList = () => {

    const getImage = async (): Promise<GetImagesResponse> => {
        const MYKEY = 'O22iEBkxdEBcErkVv6q1jlgJSgNQNdhs7twvC1RC'

        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${MYKEY}`)


        const data = await response.data;

        return data;
    }

    const { data, isLoading, isError } = useQuery(
        "/imgData", 
        getImage
    );
    
    if(isLoading){
        return <h1>Carregando</h1>
    }

    if(isError){
        return <h1>Erro, não foi possível carregar a página</h1>
    }
        


    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat quam nibh."


    return (
        <section className="flex flex-wrap gap-5 m-10 mobile:justify-center laptop:justify-center">
            {data.photos.map((imgData: ImageDataProps) =>{
             
                return <CardItem key={imgData.id} imgUrl={imgData.img_src} imgAlt="Image Mars Rover" date={format(new Date(imgData.earth_date), "MMMM d, yyyy", { locale: ptBR}).charAt(0).toUpperCase() + format(new Date(imgData.earth_date), "MMMM d, yyyy", { locale: ptBR}).slice(1)} description={text}/>
            })}
        </section>
    )
    

}

function CardListWithQueryProvider(){
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <CardList />
        </QueryClientProvider>
    )
}

export { CardListWithQueryProvider };