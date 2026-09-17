import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      name: "Google",
      datePosted: "5 days ago",
      post: "UI/UX Designer",
      tag1: "Part-Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      name: "Microsoft",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Junior Level",
      pay: "$100/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Senior UI/UX Designer",
      tag1: "Part-Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      name: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$110/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      name: "Apple",
      datePosted: "10 weeks ago",
      post: "Product Designer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      name: "Netflix",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$140/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
      name: "Tesla",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$130/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Graphic Designer",
      tag1: "Part-Time",
      tag2: "Junior Level",
      pay: "$90/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      name: "IBM",
      datePosted: "2 weeks ago",
      post: "Data Analyst",
      tag1: "Full-Time",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      name: "Oracle",
      datePosted: "3 days ago",
      post: "Cloud Engineer",
      tag1: "Full-Time",
      tag2: "Senior Level",
      pay: "$135/hr",
      location: "Islamabad, Pakistan",
    },
  ];

  return (
    <main className="jobs-container">
      {jobs.map((job) => (
        <Card key={job.name} {...job} />
      ))}
    </main>
  );
};

export default App;