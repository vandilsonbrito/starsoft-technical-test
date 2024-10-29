import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { mockData } from './mocks/apiMockData';
import ProductContainer from '@/app/components/ProductContainer';
import DisplayingProducts from '@/app/components/DisplayingProducts';
import store from '@/utils/redux/store';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

describe('Header component', () => {
  it('should render logo and cart item quantity on Header', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();

    const cartQuantity = screen.getByText(/0/); 
    expect(cartQuantity).toBeInTheDocument();
  });
});


describe('ProductContainer ', () => {
  it('should render items from api data ', () => {

      render(
          <Provider store={store}>
              {
                  mockData.data.map((item, index) => (
                      <div key={index}>
                          <ProductContainer item={item} />
                      </div>
                  ))
              }
        </Provider>
      );

      expect(screen.getByText(/Produto 1/)).toBeInTheDocument();
      expect(screen.getByText(/29.99 ETH/)).toBeInTheDocument();

  });
});


describe('Footer component', () => {
  it('should render company copyright message', () => {
    render(<Footer/>);

    const companyName = screen.getByText(/STARSOFT © TODOS OS DIREITOS RESERVADOS/i);
    expect(companyName).toBeInTheDocument();
  });
});