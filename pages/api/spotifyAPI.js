import SpotifyWebApi from 'spotify-web-api-node';

const refreshToken = "AQDsksHdMfV02g2FPVFaI5CeQldjiDWlBSbFBwoMHMbH69OfQHR4U2R9swFgbptOUWxEIs8bp08B5Bq0aYYS5lDU_ZXNcEKahAsRaMUh8L1rnCJkHbFC8r_ZTSo2vOAwlVmcVbQo5EPi6E3aSyoZTeY7IJIpGcGHkkNjsTzzyOg_8y92Btdo7mvG9WRr4emHQE8AxUprjTRW6VF428UntLk_wYdwmg";

module.exports = {
  async execute(refreshToken){
    const spotifyApi = new SpotifyWebApi({
      clientId: '774b29d4f13844c495f206cafdad9c86',
      clientSecret: 'efb86a11e0730c89f30e5d396ded5e66',
      redirectUri: 'http://localhost:3000'
    });

    try {
      // Refresh the access token using the refresh token
      const data = await spotifyApi.getRefreshToken(refreshToken);
      console.log(data);
      // Use the new access token to make requests to the Spotify API
      //spotifyApi.setAccessToken(data.body['access_token']);

      // Return the new access token
      //return data.body['access_token'];
    } catch (error) {
      
      console.error(error);
      return null;
    }
  }
}
