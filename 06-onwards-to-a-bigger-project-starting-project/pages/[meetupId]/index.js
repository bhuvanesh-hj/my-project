import MeetupDetail from "../../components/meetups/MeetupDetail";

const meetupId = () => {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
      id="m1"
      title="A first meetup"
      description="This ia a first meetup"
      address="Some road 23, Some city"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
        id: meetupId,
        title: "A first meetup",
        description: "This ia a first meetup",
        address: "Some road 23, Some city",
      },
    },
  };
}

export default meetupId;
