import DisplayingProducts from "./components/DisplayingProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadMoreBtn from "./components/LoadMoreBtn";
import OverlayCheckout from "./components/OverlayCheckout";

export default function Home() {

    return (
      <main className='home-page'>
        <Header/>
        <OverlayCheckout/>
        <section className='home-page-section'>
            <div className='products-wrapper'>
               <DisplayingProducts/>
            </div>
            <div className="load-more-container">
              <LoadMoreBtn/>  
            </div>
        </section>
        <Footer/>
      </main>
    );
}
