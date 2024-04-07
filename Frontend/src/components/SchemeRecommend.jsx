import React from 'react';

export const SchemeRecommend = () => {
    return (
        <div className="scheme p-8">
        <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Scheme Recommendations</h1>
            <p>Chat with our virtual assistant to identify the best schemes for your business needs</p>
            <div className="subhead mt-4 flex">
                {/* Video column */}
                <div className="video-column mr-8 flex-grow">
                    {/* Video goes here */}
                    <video className="mt-4" width="300" height="550" controls>
                        <source src={'public/SchemeGenerated1.mov'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                </div>
                </div>
                
        <hr className="my-8" />

            <div>
                <div className="head">
                    <h3 className="text-xl font-bold">Grants for Start-ups</h3>
                </div>
                <div className="subhead card shadow-lg p-6 mb-6">
                    <h4 className="text-lg font-bold">Startup SG Founder</h4>
                    <p className="mb-4">Startup SG Founder provides mentorship and a startup capital grant of S$50,000 to first-time entrepreneurs with innovative business ideas. Startups are required to commit S$10,000 as co-matching funds to the grant.</p>
                    <button className="btn btn-primary mr-2">See more details</button>
                    <button className="btn btn-primary">Login to Add Scheme</button>
                </div>
                <div className="subhead card shadow-lg p-6 mb-6">
                    <h4 className="text-lg font-bold">Startup SG Tech</h4>
                    <p className="mb-4">Startup SG Tech supports Proof-of-Concept (POC) and Proof-of-Value (POV) for the commercialization of innovative technologies.</p>
                    <button className="btn btn-primary mr-2">See more details</button>
                    <button className="btn btn-primary">Login to Add Scheme</button>
                </div>
            </div>

            <hr className="my-8" />

            <div>
                <div className="head">
                    <h3 className="text-xl font-bold">First-Time Applicants</h3>
                </div>
                <div className="card shadow-lg p-6 mb-6">
                    <h4 className="text-lg font-bold">Enterprise Development Grant (EDG)</h4>
                    <p className="mb-4">The EDG helps Singapore companies grow and transform. This grant supports projects that help you upgrade your business, innovate, or venture overseas. Receive up to 70% support for eligible costs.</p>
                    <button className="btn btn-primary mr-2">See more details</button>
                    <button className="btn btn-primary">Login to Add Scheme</button>
                </div>
            </div>

            <hr className="my-8" />

            <div>
                <div className="head">
                    <h3 className="text-xl font-bold">Agriculture Grants</h3>
                </div>
                <div className="card shadow-lg p-6 mb-6">
                    <h4 className="text-lg font-bold">Agri-Food Cluster Transformation (ACT) Fund</h4>
                    <p className="mb-4">The Agri-Food Cluster Transformation (ACT) Fund supports local food-producing companies in their efforts to expand production capabilities, boost yield, raise productivity, sustainability, and improve circularity.</p>
                    <button className="btn btn-primary mr-2">See more details</button>
                    <button className="btn btn-primary">Login to Add Scheme</button>
                </div>
            </div>
        </div>
    );
};
