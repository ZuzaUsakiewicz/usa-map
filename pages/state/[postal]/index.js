import Link from "next/Link";
import { server } from "../../../config";
const state = ({ state }) => {
  console.log(state);
  return (
    <div>
      <h1>{state.postal} </h1>
      <h3>{state.name}</h3>

      <Link href="/">Back</Link>
    </div>
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
