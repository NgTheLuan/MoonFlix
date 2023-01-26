import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page),

  mediaDetail: ({ mediaType, mediaCategory }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`);
  },

  mediaGenres: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`);
  },

  mediaVideos: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`);
  },

  mediaRecommend: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`);
  },

  mediaImage: ({ mediaType, mediaId }) => {
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`);
  },

  mediaSearch: ({ mediaType, query, page }) => {
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page });
  },

  personDetail: ({ personId }) => {
    tmdbConfig.getUrl(`person/${personId}`);
  },

  personMedias: ({ personId }) => {
    tmdbConfig.getUrl(`person/${personId}/combined_credits`);
  },
};

export default tmdbEndpoints;
