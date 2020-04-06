import React, { useEffect, useState } from 'react';
import Earnings from './Earnings';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
  
  // const APP_ID = 'consulta-empresa-cnpj-e-socios.p.rapidapi.com';
  // const APP_KEY = '05b058f854msh45f291e599a965ap1d9ca1jsne23dbea8a53e';

  // const [earnings, setEarnings] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState('');

  // const exampleRequest = `https://consulta-empresa-cnpj-e-socios.p.rapidapi.com/socio/${query}`
  
  // useEffect(() => {
  //   getEarnings();
  // }, [query]);

  // const getEarnings = async () => {

  //   const response = await fetch(exampleRequest, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": APP_ID,
  //       "x-rapidapi-key": APP_KEY
  //     }
  //   });

  //   const data = await response.json();
  //   setEarnings(data);
  // };

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // }

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch('');
  // }

  // return (
  //   <div className='App'>
  //   <nav class="navbar navbar-light bg-light justify-content-between">
  //     <a className="navbar-header" class="navbar-brand">Earnings by Period</a>
  //     <form className='search-form' class="form-inline" onSubmit={getSearch}>
  //       <input className="search-bar" class="form-control mr-sm-2" type="text" value={search} onChange={updateSearch}/>
  //       <button className="search-button" class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search Ticker</button>
  //     </form>
  //   </nav>
  //   <div className="search-results">
  //     {earnings.map(earning =>(
  //         <Earnings
  //         key={Math.random()} 
  //         title={earning.symbol} 
  //         netPrice={earning.actual}
  //         period={earning.period}
  //         />
  //     ))}
  //   </div>
  //   </div>
  // );
};

export default App;
