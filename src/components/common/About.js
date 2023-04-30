import React from "react";

const About = ({ teachersName }) => {
    return (
        <div className="card text-center">
            <div className="card-header">About Creator</div>
            <div className="card-body">
                <h5 className="card-title">Yola and Rasoul</h5>
                <p className="card-text">Teacher: { teachersName }</p>
                <a href="#" className="btn btn-primary">
                    Go to their page
                </a>
            </div>
            <div className="card-footer text-muted">
                Here is the best world!
            </div>
        </div>
    );
};

export default About;
