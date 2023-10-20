import { useRouter } from "next/router";
import { Fragment } from "react";

function developer() {
  const router = useRouter();
  const devId = router.query.developer;

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <Fragment>
      {devId == 1 && (
        <h1>
          {details[0].name} {details[0].role}
        </h1>
      )}
      {devId == 2 && (
        <h1>
          {details[1].name} {details[1].role}
        </h1>
      )}
      {devId == 3 && (
        <h1>
          {details[2].name} {details[2].role}
        </h1>
      )}
      {devId >3 && <h1>Developer doesn't exist</h1>}
    </Fragment>
  );
}

export default developer;
