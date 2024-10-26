import DisplayingProducts from "./components/DisplayingProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {

    return (
      <main className='home-page'>
        <Header/>
        <section className='home-page-section'>
            <div className='products-wrapper'>
               <DisplayingProducts/>
            </div>
        </section>
        <Footer/>
      </main>
    );
}
