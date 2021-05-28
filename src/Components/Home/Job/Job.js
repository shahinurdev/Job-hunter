import React from "react";
import "./Job.css";
import JobCard from "../JobCard/JobCard";
import googleLogo from "../../../img/google-logo.png";

const Job = () => {
    const jobCardData = [
        {
            id: 1,
            img: googleLogo,
            jobTitle: "Product Designer",
            location: "Google, San Fransico",
            jobType: "Full-time",
            date: "Starting May 20"
        },
        {
            id: 2,
            img: googleLogo,
            jobTitle: "Product Designer",
            location: "Google, San Fransico",
            jobType: "Full-time",
            date: "Starting May 20"
        },
        {
            id: 3,
            img: googleLogo,
            jobTitle: "Product Designer",
            location: "Google, San Fransico",
            jobType: "Full-time",
            date: "Starting May 20"
        },
        {
            id: 4,
            img: googleLogo,
            jobTitle: "Product Designer",
            location: "Google, San Fransico",
            jobType: "Full-time",
            date: "Starting May 20"
        },
    ]
  return (
    <section className="container py-5">
      <div id="sidebar">
        <div>
          <h6>Filter by City</h6>
          <form className="ml-md-2">
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="new-york" />{" "}
              <label for="new-york" className="pl-1 pt-sm-0 pt-1">
                New York (35)
              </label>{" "}
            </div>
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="san-fransico" />{" "}
              <label for="san-fransico" className="pl-1 pt-sm-0 pt-1">
                San Fransico (23)
              </label>{" "}
            </div>
            <div className="form-inline p-md-2 p-sm-1">
              {" "}
              <input type="checkbox" name="type" id="los-angles" />{" "}
              <label for="los-angles" className="pl-1 pt-sm-0 pt-1">
                Los Angles (20)
              </label>{" "}
            </div>
            <div className="form-inline p-md-2 p-sm-1">
              {" "}
              <input type="checkbox" name="type" id="austin" />{" "}
              <label for="austin" className="pl-1 pt-sm-0 pt-1">
                Austin (15)
              </label>{" "}
            </div>
            <div className="form-inline p-md-2 p-sm-1">
              {" "}
              <input type="checkbox" name="type" id="chicago" />{" "}
              <label for="chicago" className="pl-1 pt-sm-0 pt-1">
                Chicago (09)
              </label>{" "}
            </div>
          </form>
        </div>
        <div className="my-5">
          <h6>Filter by Categories</h6>
          <form className="ml-md-2">
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="boring" />{" "}
              <label for="boring" className="pl-1 pt-sm-0 pt-1">
                Boring
              </label>{" "}
            </div>
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="ugly" />{" "}
              <label for="ugly" className="pl-1 pt-sm-0 pt-1">
                Ugly
              </label>{" "}
            </div>
            <div className="form-inline p-md-2 p-sm-1">
              {" "}
              <input type="checkbox" name="type" id="notugly" />{" "}
              <label for="notugly" className="pl-1 pt-sm-0 pt-1">
                Not Ugly
              </label>{" "}
            </div>
          </form>
        </div>
        <div className="my-5">
          <h6>Filter by Type</h6>
          <form className="ml-md-2">
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="boring" />{" "}
              <label for="boring" className="pl-1 pt-sm-0 pt-1">
                Boring
              </label>{" "}
            </div>
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="ugly" />{" "}
              <label for="ugly" className="pl-1 pt-sm-0 pt-1">
                Ugly
              </label>{" "}
            </div>
            <div className="form-inline p-md-2 p-sm-1">
              {" "}
              <input type="checkbox" name="type" id="notugly" />{" "}
              <label for="notugly" className="pl-1 pt-sm-0 pt-1">
                Not Ugly
              </label>{" "}
            </div>
          </form>
        </div>
        <div className="my-5">
          <h6>Filter by Type</h6>
          <form className="ml-md-2">
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="boring" />{" "}
              <label for="boring" className="pl-1 pt-sm-0 pt-1">
                Boring
              </label>{" "}
            </div>
            <div className="form-inline p-sm-2 my-2">
              {" "}
              <input type="checkbox" name="type" id="ugly" />{" "}
              <label for="ugly" className="pl-1 pt-sm-0 pt-1">
                Ugly
              </label>{" "}
            </div>
            <div className="form-inline p-md-2 p-sm-1">
              {" "}
              <input type="checkbox" name="type" id="notugly" />{" "}
              <label for="notugly" className="pl-1 pt-sm-0 pt-1">
                Not Ugly
              </label>{" "}
            </div>
          </form>
        </div>
      </div>
      <div id="job-listing">
        <div className="container">
          <div className="row">
            <h1>Featured Jobs</h1>
            {
                jobCardData.map( jobSingle => <JobCard key="id" jobSingle={jobSingle}></JobCard>)
            }
          </div>
          <div className="row my-5">
            <h1>Job Listing</h1>
            {
                jobCardData.map( jobSingle => <JobCard key="id" jobSingle={jobSingle}></JobCard>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
