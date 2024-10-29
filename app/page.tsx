'use client';
import { useSelector } from "react-redux";
import DisplayingProducts from "./components/DisplayingProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadMoreBtn from "./components/LoadMoreBtn";
import OverlayCheckout from "./components/OverlayCheckout";
import { RootState } from "@/utils/redux/store";

export default function Home() {

    const isThereAPIdata = useSelector((state: RootState) => state.isThereAPIdata.value);

    return (
      <main className='home-page'>
        <Header/>
        <OverlayCheckout/>
        <section className='home-page-section'>
            {
                isThereAPIdata ?
                (
                  <>
                      <div className='products-wrapper'>
                        <DisplayingProducts/>
                      </div>
                      <div className="load-more-container">
                        <LoadMoreBtn/>  
                      </div>
                  </>
                )
                :
                (
                  <>
                      <p style={{ marginBottom: '5px' }}>Erro ao carregar os dados.</p>
                      <p>Por favor, tente mais tarde.</p>
                  </>
                )
            }
            
        </section>
        <Footer/>
      </main>
    );
}