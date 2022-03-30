import React from 'react';
import Cards from './components/cards/cards';
import Chart from './components/chart/chart';
import CountryPicker from './components/countryPicker/countryPicker';
import styles from './app.module.css';
import { fetchData } from './api';
import image from './images/image.png';
import Helmet from 'react-helmet';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Helmet>
          <title>COVID-19 Tracker</title>
        </Helmet>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;