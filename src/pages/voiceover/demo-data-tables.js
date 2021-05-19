import React from "react"
import Layout from '../../components/layout'
import image1 from '../../images/vh0034x930d76ds-23dx.gif'


const DemoDataTables = () => {

  return (
    <Layout title={'Alt Text Demo'}>
      <p>Try reading the following tables in VoiceOver. Use the Roter to navigate to different tables.</p>
      <h2 id="bc-cities-forecast-title">BC Cities Weather Forecast</h2>
      <table aria-labelledby="bc-cities-forecast-title" style={{width: '100%'}}>
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (°C)</th>
            <th scope="col">Weather</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Kelowna</td>
          <td>25</td>
          <td>Sunny</td>
        </tr>
        <tr>
          <td>Lytton</td>
          <td>29</td>
          <td>Sunny</td>
        </tr>
        <tr>
          <td>Prince Rupert</td>
          <td>18</td>
          <td>Cloudy</td>
        </tr>
        <tr>
          <td>Vancouver</td>
          <td>21</td>
          <td>Sunny</td>
        </tr>
        </tbody>
      </table>
      <h2 className="mt-6" id="ab-cities-forecast-title">Alberta Cities Weather Forecast</h2>
      <table aria-labelledby="ab-cities-forecast-title" style={{width: '100%'}}>
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (°C)</th>
            <th scope="col">Weather</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Banff</td>
          <td>24</td>
          <td>Sunny</td>
        </tr>
        <tr>
          <td>Calgary</td>
          <td>23</td>
          <td>Sunny</td>
        </tr>
        <tr>
          <td>Edmonton</td>
          <td>18</td>
          <td>Rain</td>
        </tr>
        <tr>
          <td>Red Deer</td>
          <td>21</td>
          <td>Cloudy</td>
        </tr>
      
        
        </tbody>
      </table>
    </Layout>
  )
}

export default DemoDataTables