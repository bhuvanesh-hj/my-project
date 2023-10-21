import { useRouter } from 'next/router'

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter()
  const newMetupHandler = async (newMeetData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/")
  };

  return (
    <>
      <NewMeetupForm onAddMeetup={newMetupHandler} />
    </>
  );
};

export default NewMeetup;
