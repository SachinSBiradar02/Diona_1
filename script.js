document.getElementById("prescription-drugs").innerHTML = `
  <h2>Prescription Drugs</h2>
  <table>
    <tr>
      <th>Drug Name</th>
      <th>Date Purchased</th>
      <th>Healthcare Provider</th>
      <th>Paid Amount</th>
    </tr>
    <tr>
      <td>Naproxen</td>
      <td>Feb 28 & 29, 2024</td>
      <td>Dr. Best</td>
      <td>$20.00</td>
    </tr>
  </table>
`;

document.getElementById("otc-drugs").innerHTML = `
  <h2>Over-the-Counter Drugs</h2>
  <table>
    <tr>
      <th>Drug Name</th>
      <th>Date Purchased</th>
      <th>Paid Amount</th>
      <th>Seller's Name</th>
      <th>Reason</th>
    </tr>
    <tr>
      <td>Advil</td>
      <td>March 28, 2024</td>
      <td>$8.00</td>
      <td>Shoppers Drug Mart</td>
      <td>Pain</td>
    </tr>
  </table>
`;

document.getElementById("medical-supplies").innerHTML = `
  <h2>Bandages, Braces or Other Medical Supplies</h2>
  <table>
    <tr>
      <th>Item Purchased</th>
      <th>Date</th>
      <th>Prescribed?</th>
      <th>Paid Amount</th>
      <th>Seller</th>
    </tr>
    <tr>
      <td>Tensor</td>
      <td>Feb 28, 2024</td>
      <td>Yes (Dr. Best)</td>
      <td>$10.00</td>
      <td>Shoppers Drug Mart</td>
    </tr>
  </table>
`;

document.getElementById("parking").innerHTML = `
  <h2>Parking for Medical Appointments</h2>
  <table>
    <tr>
      <th>Facility Address</th>
      <th>Date</th>
      <th>Amount</th>
      <th>Meter Number</th>
    </tr>
    <tr>
      <td>333 St Mary Ave, Winnipeg, MB</td>
      <td>March 28, 2024</td>
      <td>$10.00</td>
      <td>12245</td>
    </tr>
  </table>
`;

document.getElementById("mileage").innerHTML = `
  <h2>Mileage to Medical Appointments</h2>
  <table>
    <tr>
      <th>Appointment Date</th>
      <th>From</th>
      <th>To</th>
      <th>Distance (Round Trip)</th>
    </tr>
    <tr>
      <td>March 28, 2024</td>
      <td>WCB, 333 Broadway</td>
      <td>HSC, 820 Sherbrook St</td>
      <td>20 km</td>
    </tr>
  </table>
`;

document.getElementById("fare").innerHTML = `
  <h2>Bus or Taxi Fare for Medical Appointments</h2>
  <table>
    <tr>
      <th>Appointment Date</th>
      <th>Starting Address</th>
      <th>Facility Address</th>
      <th>Transport Type</th>
      <th>Total Fare</th>
    </tr>
    <tr>
      <td>March 28, 2024</td>
      <td>HSC Winnipeg Women’s Hospital</td>
      <td>665 William Ave, Winnipeg</td>
      <td>Bus</td>
      <td>$3.00</td>
    </tr>
    <tr>
      <td>March 27, 2024</td>
      <td>25 Furby St</td>
      <td>440 Edmonton St, Winnipeg</td>
      <td>Taxi</td>
      <td>$15.00</td>
    </tr>
  </table>
`;
