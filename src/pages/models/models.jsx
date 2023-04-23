import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import './models.css';

function Models() {

    const [models, setModels] = useState([]);

    const handleRefresh = () => {
        setFilters({
            classes: "",
            batchSize: "",
            epochs: "",
        });
    };

    const [filters, setFilters] = useState({
        classes: "",
        batchSize: "",
        epochs: "",
    });

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const filteredApplications = models.filter((application) => {
        // Filter the applications based on the current filter values
        return (
            application.studentName.toLowerCase().includes(filters.studentName.toLowerCase()) &&
            application.studentEmail.toLowerCase().includes(filters.studentEmail.toLowerCase()) &&
            application.rollNo.toLowerCase().includes(filters.rollNo.toLowerCase()) &&
            application.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()) &&
            application.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) &&
            application.companyEmail.toLowerCase().includes(filters.companyEmail.toLowerCase())
        );
    });


    return (
        <>
            <Navbar />
            <div className="table-container table-responsive-sm table-responsive-md">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Classes</th>
                            <th scope="col">Batch Size</th>
                            <th scope="col">Epochs</th>
                            <th scope="col">Accuracy</th>
                            <th scope="col">Model</th>
                        </tr>
                        <tr className="filter-row">
                            <td className="icon">
                                <i class="fa fa-refresh" aria-hidden="true" onClick={handleRefresh}></i>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={filters.classes}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="studentEmail"
                                    value={filters.batchSize}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="rollNo"
                                    value={filters.epochs}
                                    onChange={handleFilterChange}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="rollNo"
                                    value={filters.epochs}
                                    onChange={handleFilterChange}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>Car, Bike, Scooty, BiCycle, Truck, Aeroplace</td>
                        <td>32</td>
                        <td>30</td>
                        <td>97.2</td>
                        <td><a href="">automobils.h5</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Shah Rukh Khan, Salman Khan, Katrina Kaif, Alia Bhatt, Soman Kapoor, Akshay Kumar, Pritti Zinta</td>
                        <td>32</td>
                        <td>30</td>
                        <td>92.4</td>
                        <td><a href="">actors.h5</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dog, Cat, Cow, Tiger, Lion, Pig, Horse, Rat, Ant</td>
                        <td>32</td>
                        <td>30</td>
                        <td>96.7</td>
                        <td><a href="">animals.h5</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Laptop, Mouse, Keyboard, Printer, Scanner, Monitor, Television, Refrigerator, Speaker</td>
                        <td>32</td>
                        <td>30</td>
                        <td>95.4</td>
                        <td><a href="">electronics.h5</a></td>
                    </tr>
                    <tbody>

                    </tbody>
                </table>
            </div >
        </>
    );
}

export default Models;