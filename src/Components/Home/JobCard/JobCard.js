import React from 'react';


const JobCard = (props) => {
    const {img, jobTitle, location, jobType, date} = props.jobSingle;
    return (
        <div class="col-12 p-4 d-flex align-items-center border rounded-lg my-2">
              <img
                className="bg-light p-2 rounded-lg"
                src={img}
                alt=""
              />
              <div className="mx-3">
                <h4 className="m-0">{jobTitle}</h4>
                <small class="text-muted m-0">{location}</small>
              </div>
              <div className="ml-auto">
                <small className="d-block p-1 text-center bg-primary text-white rounded-lg">{jobType}</small>
                <small class="text-muted">{date}</small>
              </div>
            </div>
    );
};

export default JobCard;