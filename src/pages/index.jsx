import { Layout, Heading, Grid } from "../components";
import { NAV_QUERY } from "../lib/queries";
import client from "../lib/apollo-client"; // Apollo Client // Import into every page that needs to fetch data


export default function Home({ navs, loading }) {

    console.log(navs);

    console.log(loading);
    
    return (
        <Layout>
            {/* Content goes here */}
        </Layout>
    )
}

export async function getServerSideProps() {

    const { data, loading } = await client.query({
        query: NAV_QUERY // Graphql Query goes here
    });

    return {
      props: {
        navs: data.navs,
        loading: loading
      }
    }
  }