import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
  mediaList: ({}) => tmdbConfig.getUrl(),
};

export default tmdbEndpoints;
