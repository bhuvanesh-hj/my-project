import Link from "next/link";
import { Fragment } from "react";

function aboutUsPage() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  let developer = details.map((dev) => (
    <li>
      <h3>
        <Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
      </h3>
    </li>
  ));
  return (
    <Fragment>
      <h1>This is AboutUs page</h1>
      <ul>{developer}</ul>
    </Fragment>
  );
}

export default aboutUsPage;
