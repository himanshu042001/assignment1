import React, { useEffect, useState } from 'react';
import './ResultPage.css'; // Import the CSS file


function ResultPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the submitted data and update the 'data' state
        fetch('http://localhost:5000/fetchData')
            .then((response) => response.json())
            .then((result) => { setData(result); console.log(data) });
    }, []);

    return (
        <div className="result-page">
            <h1>Submitted Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Company UEN</th>
                        <th>Company Name</th>
                        <th>Full Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td> {/* Add ID as a sequence */}
                            <td>{item.CompanyUEN}</td>
                            <td>{item.CompanyName}</td>
                            <td>{item.Fullname}</td>
                            <td>{item.Position}</td>
                            <td>{item.Email}</td>
                            <td>{item.Phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultPage;
