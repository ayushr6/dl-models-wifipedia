import React, { useState, useContext, useEffect } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import Navbar from "../../components/navbar/navbar";
import './dashboard.css'

function Dashboard() {

    const [skillsReq, setTags] = useState([]);
    const [modelName, setModelName] = useState([]);
    const [batchSize, setBatchSize] = useState([]);
    const [epochs, setEpochs] = useState([]);


    const handleDelete = (i) => {
        setTags(skillsReq.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        setTags([...skillsReq, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = skillsReq.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const handleTagClick = (index) => {
        // console.log("The tag at index " + index + " was clicked");
    };

    const handleInputChange = (e) => {
        e.target.value = e.target.value;
    }

    return (
        <>
            <Navbar />
            <div className="parent">
                <header>
                    <h3>Train New Model</h3>
                    <hr />
                </header>

                <div className="row train" id="profile">
                    {/* <div className="col-lg-3 col-md-3 col-sm-12" id="profile-icon-div">
                        <i class="fa-regular fa-user" id="profile-icon"></i>
                    </div> */}

                    <form className="col-lg-9 col-md-9 col-sm-12" id="profile-details">

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">

                                <div className="input-group">

                                    <for for="exampleFormControlInput1" class="form-label">Model Name</for>
                                    <div className="input-div">
                                        <input type="text" className="form-control" name="companyName" value={modelName} onChange={(e) => setModelName(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">Batch Size</for>
                                    <div className="input-div">
                                        <input type="text" className="form-control" value={batchSize} name="emailID" onChange={(e) => setBatchSize(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <div className="input-group">
                                    <for for="exampleFormControlInput1" class="form-label">epochs</for>
                                    <div className="input-div">
                                        <input type="text" className="form-control" value={epochs} name="emailID" onChange={(e) => setEpochs(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <br />
                            <label for="stipend" className="form-label">
                                Classes
                            </label>
                            <ReactTags
                                tags={skillsReq}
                                handleDelete={handleDelete}
                                handleAddition={handleAddition}
                                handleDrag={handleDrag}
                                handleTagClick={handleTagClick}
                                inputFieldPosition="inline"
                                placeholder="Enter Classes"
                            />
                        </div>

                        <div className="button-div">
                            <button type="button" class="btn btn-primary">Train</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Dashboard;