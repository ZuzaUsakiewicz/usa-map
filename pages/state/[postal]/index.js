import { server } from "../../../config";
import StateItemDetailPage from "../../../components/StateItemDetailPage";

const state = ({ state }) => {
  return (
    <>
      <StateItemDetailPage state={state} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const respond = await fetch(`${server}/api/states/${context.params.postal}`);
  const state = await respond.json();

  return {
    props: {
      state,
    },
  };
};

export const getStaticPaths = async () => {
  const respond = await fetch(`${server}/api/states`);
  const states = await respond.json();

  const postals = states.map((state) => state.postal);
  const paths = postals.map((postal) => ({ params: { postal: postal } }));
  return {
    paths,
    fallback: false,
  };
};

export default state;
