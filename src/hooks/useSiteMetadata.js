import { useStaticQuery, graphql } from 'gatsby';

function useSiteMetadata() {
  const { site = {} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            lang
            siteType
            title
            backend
          }
        }
      }
    `
  );

  return site.siteMetadata || {};
}

export default useSiteMetadata;
