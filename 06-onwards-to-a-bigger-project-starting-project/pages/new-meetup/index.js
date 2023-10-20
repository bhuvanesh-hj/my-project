import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {

  const newMetupHandler = (newMeetData) => {
    console.log(newMeetData);
  };
  
  return (
    <>
      <NewMeetupForm onAddMeetup={newMetupHandler} />
    </>
  );
};

export default NewMeetup;
