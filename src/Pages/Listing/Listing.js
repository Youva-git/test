import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Item from './components/Item/Item';
import listingStyle from './Listing.module.scss';

const Listing = () => {
  const [Products, setProducts] = useState([]);
  const [ChosenProducts, setChosenProducts] = useState([]);
  const [CalendarValue, setCalendarValue] = useState(new Date());
  const [SearchValue, setSearchValue] = useState('');

  const handleDateChange = (ev) => {
    const date_products = Products.filter(product => new Date(product.releaseDate).toDateString() === ev.toDateString());
    setChosenProducts(date_products);
    setCalendarValue(ev);
  }

  useEffect(() => {
    axios.get('/browse', {
      params: {
        sort: "release_date",
      }
    })
      .then(res => {
        const products = res.data.Products;
        const sorted_products = products.sort((a,b) => new Date(a.releaseDate) - new Date(b.releaseDate));
        setCalendarValue(new Date(sorted_products[0].releaseDate));
        setProducts(products);
      })
  }, []);

  const handleSearch = (ev) => {
    const { value } = ev.target;
    if (value !== '') {
      const filtered_products = Products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
      setChosenProducts(filtered_products);
    } else {
      setChosenProducts([]);
    }
    setSearchValue(value);
  }

  return (
    <div className={listingStyle.container}>
      <label className={listingStyle.label}>Search for products</label>
      <input className={listingStyle.input} type="text" value={SearchValue} onChange={handleSearch} />
      <h1 className={listingStyle.section_title}>Choose a day to see what products release that day</h1>
      <Calendar
        onChange={handleDateChange}
        value={CalendarValue}
        className={listingStyle.calendar}
        tileClassName={listingStyle.calendar_item}
        tileContent={({date}) => {
          const products = Products.filter(product => new Date(product.releaseDate).toDateString() === date.toDateString());
          return products.length !== 0 ? <div className={listingStyle.drop_style}>{products.length / 2} New items!</div> : null;
        }}
      />
      <hr/>
      {/* Products display */}
      <div className={listingStyle.products_listing}>
        <h1 className={listingStyle.section_title}>Products released on this day: {CalendarValue.toDateString()}</h1>
        <div className={listingStyle.products}>
          {
            ChosenProducts.length === 0 ?
            <div>No releases on this date, please choose another date.</div>
            :
            ChosenProducts.map((product, index) => (
              index % 2 === 0 && <Item product={product} /> // there are duplicates items in the data, this is an API issue
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default Listing;
